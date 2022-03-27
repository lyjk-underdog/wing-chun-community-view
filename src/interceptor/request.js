import config from '@/config/index.js';

let errHandleStrategy = {
    '400'(message) {
        uni.showToast({
            title: message,
            icon: 'error',
        });
    },
    '401'() {
        uni.showToast({
            title: '登录已失效',
            icon: 'error',
        });
        uni.redirectTo({ url: 'login' });
    },
    '500'(message) {
        uni.showToast({
            title: message,
            icon: 'error',
        });
    }
}

uni.addInterceptor('request', {
    invoke(options) {
        let _setHeader = () => {
            let token = uni.getStorageSync('token') || "";
            options.header = { ...options.header, "Authorization": token }
        }

        let _setURL = () => {
            options.url = config.BASE_URL + options.url;
        }

        // let _showLoading = (title) => {
        //     uni.showToast({
        //         title,
        //         icon: 'loading',
        //         mask: true
        //     })
        // }

        // _showLoading('加载中');
        _setHeader();
        _setURL();
    },
    success(res) {
        let {
            data,
            statusCode,
            errMsg
        } = res;

        // let _hideToast = () => uni.hideToast();

        let _httpCodeHandle = () => {
            if (statusCode !== 200) {
                uni.showToast({
                    title: errMsg,
                    icon: 'error'
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
            // _hideToast();
            _httpCodeHandle();
            _selfHttpCodeHandle();
        } catch (e) { }

    },
    fail() {
        uni.showToast({
            title: '网络错误',
            icon: 'error',
        });
    }
})