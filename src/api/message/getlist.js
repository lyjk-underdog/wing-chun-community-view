export default (msgType) => new Promise((resolve, reject) => {
    uni.request({
        url: 'message/getlist',
        method: 'GET',
        data:{
            msgType
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})