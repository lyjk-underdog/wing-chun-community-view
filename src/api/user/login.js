export default (phoneNum, password) => new Promise((resolve, reject) => {
    uni.request({
        url: 'user/login',
        method: 'POST',
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            phoneNum,
            password,
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})