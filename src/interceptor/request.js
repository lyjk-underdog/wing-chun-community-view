import config from '@/config/index.js';

let errHandleStrategy = {
    '400'(message) {
        uni.showToast({
            title: message,
            icon: 'none',
        });
    },
    '401'() {
        uni.showToast({
            title: '登录已失效',
            icon: 'none',
        });
        uni.redirectTo({ url: '/pages/login/login' });
    },
    '500'(message) {
        uni.showToast({
            title: message,
            icon: 'none',
        });
    }
}

let methods = ['request', 'uploadFile'];

uni.addInterceptor('uploadFile', {
    success(res) {
        res.data = JSON.parse(res.data);
    }
})

methods.forEach(method => {
    uni.addInterceptor(method, {
        invoke(options) {
            let _setHeader = () => {
                let token = uni.getStorageSync('token') || "";
                options.header = { ...options.header, "Authorization": token }
            }

            let _setURL = () => {
                options.url = config.BASE_URL + options.url;
            }

            let _showLoading = (title) => {
                const blacklist = [
                    'upload/'
                ]

                blacklist.indexOf(options.url) !== -1 && uni.showToast({ title, icon: 'loading', mask: true });
            }

            _showLoading('加载中');
            _setHeader();
            _setURL();
        },
        success(res) {
            let {
                data,
                statusCode,
                errMsg
            } = res;

            let _hideToast = () => uni.hideToast();

            let _httpCodeHandle = () => {
                if (statusCode !== 200) {
                    uni.showToast({
                        title: errMsg,
                        icon: 'none'
                    });
                    throw new Error(errMsg);
                }
            }

            let _selfHttpCodeHandle = () => {
                if (data.httpCode !== 200) {
                    errHandleStrategy[data.httpCode](data.message);
                    res.data = null;
                } else {
                    res.data = res.data.data || res.data.message;
                }
            }

            try {
                _hideToast();
                _httpCodeHandle();
                _selfHttpCodeHandle();
            } catch (e) { throw e }

        },
        fail(e) {
            console.log(e);
            uni.showToast({
                title: '网络错误',
                icon: 'error',
            });
        }
    })
})

