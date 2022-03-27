export default (content, imgPaths) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/publish',
        method: 'POST',
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data:{
            content,
            imgPaths
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})