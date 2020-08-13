import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/router';
function ProjectId() {
    const router = useRouter();

    useEffect(() => {
        console.log(router);
    }, []);

    return (
        <>
            <Button
                onClick={() => {
                    router.push({ pathname: '/project' });
                }}
            >
                Back
            </Button>
        </>
    );
}

export default ProjectId;
