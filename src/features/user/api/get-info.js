export default (phoneNum, password , avatar , username) => new Promise((resolve, reject) => {
    uni.request({
        url: 'user/getinfo',
        method: 'GET',
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})