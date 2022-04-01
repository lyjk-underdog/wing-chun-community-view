import config from "@/config";

export default (page, row = 10) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/getlist',
        method: 'GET',
        data: {
            page,
            row
        },
        success({ data }) {

            let _formater = (data) => {

                return {
                    ...data,
                    items: data.items.map(item => ({
                        ...item,
                        releaseTime: item.releaseTime.slice(0, -2),
                        imagePath: item.imagePath.map(path => config.ASSETS_URL + path.slice(1))
                    }))
                }
            }

            data ? resolve(_formater(data)) : reject()
        }
    })
})