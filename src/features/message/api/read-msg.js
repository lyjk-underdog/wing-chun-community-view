export default (type , commentID = '') => new Promise((resolve, reject) => {

    let typeStrategy = {
        'one':0,
        'all':1
    }

    uni.request({
        url: 'message/readmsg',
        method: 'GET',
        data:{
            type:typeStrategy[type],
            commentID
        },
        success({ data }) {
            data ? resolve(data) : reject()
        }
    })
})