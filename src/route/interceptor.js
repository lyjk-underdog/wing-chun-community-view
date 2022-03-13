import { getCurrentPage } from '@/utils';

//common

const methods = ['navigateTo', 'redirectTo'];

methods.forEach(method => {
    //如果两个当前路由路径与目的路由路径相同，则忽略
    uni.addInterceptor(method, {
        invoke(targetPage) {
            let curPage = getCurrentPage();
            if (curPage) {
                //curPage.url:pages/xxxx
                //targetPage.url:xxxx?key=value or xxxx
                let curPageMatched = curPage.url.match(/pages\/(.+)/);
                let targetPageMatched = targetPage.url.match(/(.*)\?|(.*)\?{0,1}/);
                curPageMatched[1] === (targetPageMatched[1] || targetPageMatched[2]) && (targetPage.url = '')
            }
        }
    })
})

