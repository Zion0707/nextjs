import Link from 'next/link';
export default function Project() {
    return (
        <div className="page project-page">
            <h4>Project</h4>
            <img src="/images/01.png" />
            <Link href="/">go home</Link>
        </div>
    );
}
