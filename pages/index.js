import '../styles/home.module.less';
import { Button } from 'antd';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { addition } from '../utils';

export default function Home() {
    const router = useRouter();
    const [msg, setMsg] = useState('');

    const changeCount = () => {
        setMsg(addition(1, 2));
    };

    useEffect(() => {}, []);
    return (
        <div className="page home-page">
            <h4>Home</h4>
            <div className="home-page__msg">
                <span></span>
                {msg}
            </div>
            <Button onClick={changeCount}>count+</Button>
            <Link href="/project">go project</Link>
        </div>
    );
}
