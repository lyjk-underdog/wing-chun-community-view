import imageApi from "@/api/image/index.js";

export default {
  data() {
    return {
      imgPaths: [], //[xxx.png]
    };
  },
  methods: {
    addImg() {
      uni.chooseImage({
        count: 5,
        sizeType: "compressed",
        success: async ({ tempFiles }) => {
          //利用tempFiles发送网络请求，返回得到图片地址数组['http://xxxx/static/img/xxx.png']
          await this.fetchImgPaths(tempFiles);
        },
      });
    },
    async fetchImgPaths(files) {
      try {
        for (let file of files) {
          this.imgPaths.push(await imageApi.upload(file.path));
        }
      } catch (e) {
        throw e;
      }
    },
    removeImg(targetPath) {
      //要先发起请求，成功删除服务器上的图片后再同步数据
      //....
      //这里假设已经成功删除服务器上的图片
      this.imgPaths = this.imgPaths.filter((path) => path !== targetPath);
    },
  },
}



