export default (page ,row = 10) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/getlist',
        method: 'GET',
        data:{
            page,
            row
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})