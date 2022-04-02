export default (commentID) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/likecomment',
        method: 'GET',
        data: {
            commentID
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})