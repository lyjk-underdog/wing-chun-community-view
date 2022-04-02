export default (videoID, content) => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/publishcomment',
        method: 'POST',
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            videoID,
            content
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})