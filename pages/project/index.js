import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';

export default function Project({ list }) {
    useEffect(() => {}, []);

    return (
        <div className="page project-page">
            <h4>Project</h4>
            <img src="/images/1.png" />
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href="/project/[id]" as={`/project/${item.id}`}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Link href="/index">
                <Button>go home</Button>
            </Link>
        </div>
    );
}

// 从服务中请求接口
export const getServerSideProps = async () => {
    const res = await axios.post('http://localhost:7001/api/next/list');
    const list = res.data.list;
    return {
        props: {
            list,
        },
    };
};
