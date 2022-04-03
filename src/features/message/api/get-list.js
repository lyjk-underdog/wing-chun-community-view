export default (page , row = 10) => new Promise((resolve, reject) => {
    uni.request({
        url: 'message/getlist',
        method: 'GET',
        data:{
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