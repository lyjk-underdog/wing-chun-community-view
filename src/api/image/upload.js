import config from "@/config/index.js";

export default (filePath) => new Promise((resolve, reject) => {
    uni.uploadFile({
        url: 'upload/',
        filePath:filePath,
        name:'file',
        formData:{
            type:'images'
        },
        success({ data }) {
            
            let _formater = data => {
                return `${config.ASSETS_URL}images/${data}`;
            }

            data ? resolve(_formater(data)) : reject()
        }
    })
})