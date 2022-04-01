import config from "@/config";

export default (dynamicID) => new Promise((resolve, reject) => {
    uni.request({
        url: 'dynamic/getdetail',
        method: 'GET',
        data: {
            dynamicID
        },
        success({ data }) {

            let _formater = (data) => {
                return {
                    ...data,
                    releaseTime: data.releaseTime.slice(0, -2),
                    imagePath: data.imagePath.map(path => config.ASSETS_URL + path.slice(1))
                }
            }

            data ? resolve(_formater(data)) : reject()
        }
    })
})