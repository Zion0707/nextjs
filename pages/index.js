import '../styles/home.module.less';
import { Button } from 'antd';
export default function Home() {
    const btnEvent = () => {
        console.log('antd');
    };
    return (
        <>
            <div className="dd"></div>
            <Button onClick={btnEvent}>antd</Button>
        </>
    );
}
