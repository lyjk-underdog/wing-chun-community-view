export default (commentID) => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/likecomment',
        method: 'GET',
        data: {
            commentID
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})