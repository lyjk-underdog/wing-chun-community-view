export default (videoID, commentType , page , row = 10) => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/getcommentlist',
        method: 'GET',
        data: {
            videoID,
            commentType,
            page,
            row
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})