import Link from "next/link";

const StudentList = () => {
    return (<div>
        <h1>Dynamic routing</h1>
        <ul>
            <li>
                <Link href='/student/1'>Student 1</Link>
            </li>
            <li>
                <Link href='/student/2'>Student 2</Link>
            </li>
            <li>
                <Link href='/student/3'>Student 3</Link>
            </li>
        </ul>
    </div>);
}
export default StudentList;