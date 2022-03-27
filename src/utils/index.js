export function getCurrentPage() {
    let routes = getCurrentPages(),
        routesLen = routes.length;

    if (routesLen) {
        let curRoute = routes[routesLen - 1];
        return {
            url: curRoute.route,
            query: { ...curRoute.options }
        }
    }

    return null;
}

export function validator(validatedArray) {
    validatedArray.forEach(({ value, rule, failCb }) => {
        if (!rule.test(value)) {

            failCb();
            throw new Error('待验证数组未能全部验证通过')
        }
    })
}

export function formatDate(timestamp) {
    let date = new Date(timestamp),
        Y = date.getFullYear() + '-',
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
        D = date.getDate() + ' ',
        h = date.getHours() + ':',
        m = date.getMinutes() + ':',
        s = date.getSeconds();
    return Y + M + D + h + m + s;
}

export function debounce(fn , dely){
    let timer;

    return function(){
        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this , arguments);
        }, dely);
    }
}