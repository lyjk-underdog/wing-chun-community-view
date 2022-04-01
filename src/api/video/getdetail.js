import config from "@/config/index.js";

export default (videoID) => new Promise((resolve, reject) => {
    uni.request({
        url: 'video/getdetail',
        method: 'GET',
        data: {
            videoID
        },
        success({ data }) {

            let _formater = data => ({...data , videoSrc:config.ASSETS_URL + data.videoSrc.slice(1)})

            data ? resolve(_formater(data)) : reject()
        }
    })
})