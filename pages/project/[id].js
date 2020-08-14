import React, { useEffect, useState } from 'react';
import router from 'next/router';
import Link from 'next/link';

function ProjectId() {
    const [id, setId] = useState('');
    useEffect(() => {
        console.log(router.query);
        setId(router.query.id);
    }, []);
    return (
        <>
            <div>id:{id}</div>
            <Link href="/project">
                <a>Back</a>
            </Link>
        </>
    );
}

export default ProjectId;
