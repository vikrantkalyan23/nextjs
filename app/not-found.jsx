import Link from "next/link";

const NotFound = () => {
    return (<div>
        <h3>This is Custom 404 Page</h3>
        <Link href="/">Go to Home</Link>
    </div>);
}
export default NotFound;