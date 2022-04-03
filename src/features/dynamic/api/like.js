export default (dynamicID) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/like',
        method: 'GET',
        data: {
            dynamicID
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})