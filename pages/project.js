import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import Mock from 'mockjs';

export default function Project() {
    const { list } = Mock.mock({
        'list|1-10': [
            {
                'id|+1': 1,
                name: '@name',
            },
        ],
    });

    const router = useRouter();
    const routeGo = (id) => {
        console.log(id);
        router.push({ pathname: `/project/${id}` });
    };

    return (
        <div className="page project-page">
            <h4>Project</h4>
            <img src="/images/01.png" />
            <ul>
                {list.map((item) => {
                    return (
                        <li key={item.id}>
                            <Button
                                onClick={() => {
                                    routeGo(item.id);
                                }}
                            >
                                {item.name}
                            </Button>
                        </li>
                    );
                })}
            </ul>
            <Link href="/">go home</Link>
        </div>
    );
}
