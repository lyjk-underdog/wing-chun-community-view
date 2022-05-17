export default () => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/category',
        method: 'GET',
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})