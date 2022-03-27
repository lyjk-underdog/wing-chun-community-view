export default (dynamicID , type , page , row = 10) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/getcommentlist',
        method: 'GET',
        data:{
            dynamicID,
            type,
            page,
            row
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})