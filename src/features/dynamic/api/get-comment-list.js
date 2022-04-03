export default (dynamicID , commentType , page , row = 10) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/getcommentlist',
        method: 'GET',
        data:{
            dynamicID,
            commentType,
            page,
            row
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})