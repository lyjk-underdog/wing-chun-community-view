import dynamicListApi from '../api/index.js';
import { getCurrentPage } from "@/utils/index.js";

export default ({
  data() {
    return {
      dynamic: {},
    };
  },
  methods: {
    async fetchDynamic() {
      try {
        let route = getCurrentPage();
        this.dynamic = await dynamicListApi.getItem(route.query.dynamicID);
      } catch (e) {
        throw e;
      }
    },
  },
  async mounted() {
    await this.fetchDynamic();
  },
});
