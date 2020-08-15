import { useState, useEffect } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { addition } from '../../utils';
import '../../styles/home.module.less';

export default function Home() {
    const [msg, setMsg] = useState('');

    const changeCount = () => {
        setMsg(addition(1, 2));
    };

    useEffect(() => {}, []);
    return (
        <div className="page home-page">
            <h4>Home</h4>
            <div className="home-page__msg">{msg}</div>
            <Button onClick={changeCount}>count+</Button>
            <Link href="/project">
                <a>go project</a>
            </Link>
        </div>
    );
}
