import Head from 'next/head';
import '../styles/globals.less';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link href="//at.alicdn.com/t/font_1966765_c473t2y8dvr.css"></link>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
