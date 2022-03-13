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