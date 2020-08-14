import Link from 'next/link';
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

    return (
        <div className="page project-page">
            <h4>Project</h4>
            <img src="/images/1.png" />
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href="/project/[id]" as={`/project/${item.id}`}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Link href="/">
                <a>go home</a>
            </Link>
        </div>
    );
}
