export default (videoType) => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/getlist',
        method: 'GET',
        data: {
            videoType,
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})