import Router from 'next/router';
import { useEffect } from 'react';
function Index() {
    useEffect(() => {
        // 访问该路由的时候，重定向到/index路由中
        Router.push('/index');
    }, []);
    return <></>;
}
export default Index;
