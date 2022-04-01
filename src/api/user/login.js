export default (phoneNum, password , avatar , username) => new Promise((resolve, reject) => {
    uni.request({
        url: 'user/login',
        method: 'POST',
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            phoneNum,
            password,
            avatar,
            username
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})