export default (dynamicID, content) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/publishcomment',
        method: 'POST',
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data:{
            dynamicID,
            content
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})