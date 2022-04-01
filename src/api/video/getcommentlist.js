export default (videoID, commentType, page, row = 10) => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/getcommentlist',
        method: 'GET',
        data: {
            videoID,
            commentType,
            page,
            row
        },
        success({ data }) {

            let _formater = (data) => {

                return { ...data, items: data.items.map(item => ({ ...item, releaseTime: item.releaseTime.slice(0, -2) })) }
            }

            data ? resolve(_formater(data)) : reject()
        }
    })
})