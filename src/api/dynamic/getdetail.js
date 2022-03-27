export default (dynamicID) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/getdetail',
        method: 'GET',
        data:{
            dynamicID
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})