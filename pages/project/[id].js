import React, { useEffect } from 'react';
import { Button } from 'antd';
import router from 'next/router';

function ProjectId() {
    useEffect(() => {
        console.log(router.query);
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
