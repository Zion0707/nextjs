import { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from 'antd';

function ProjectId({ data }) {
    useEffect(() => {}, []);
    return (
        <>
            <div>
                <h5>
                    <strong>{data.title}</strong>
                </h5>
                <p>{data.desc}</p>
            </div>
            <Link href="/project">
                <Button>Back</Button>
            </Link>
        </>
    );
}

// 服务端获取到id，并请求api接口获取数据
export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const res = await axios.post('http://localhost:7001/api/next/detail', {
        id,
    });
    const data = res.data.data;
    return {
        props: {
            data,
        },
    };
};

export default ProjectId;
