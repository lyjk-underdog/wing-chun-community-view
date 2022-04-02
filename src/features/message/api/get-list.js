export default (msgType , page , row = 10) => new Promise((resolve, reject) => {

    let msgTypeStrategy = {
        'read':1,
        'unread':0
    }

    uni.request({
        url: 'message/getlist',
        method: 'GET',
        data:{
            msgType:msgTypeStrategy[msgType],
            page,
            row
        },
        success({ data }) {

            let _formater = data => ({
                ...data,
                items: data.items.map(item => ({
                    ...item,
                    releaseTime: item.releaseTime.slice(0, -2),
                }))
            })

            data ? resolve(_formater(data)) : reject()
        }
    })
})