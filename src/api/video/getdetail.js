export default (videoID) => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/getdetail',
        method: 'GET',
        data: {
            videoID
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})