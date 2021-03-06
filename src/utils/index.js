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

export function debounce(fn , dely){
    let timer;

    return function(){
        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this , arguments);
        }, dely);
    }
}
