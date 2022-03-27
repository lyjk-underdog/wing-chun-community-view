export default () => new Promise((resolve, reject) => {
    uni.request({
        url: 'message/readall',
        method: 'GET',
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})