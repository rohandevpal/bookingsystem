import Link from "next/link";

function Restorentnav() {
    return (<>
        <nav className="flex text-reg border-b pb-2">
            <Link href="/restorent/macdonals/" className="mr-7"> Overview </Link>
            <Link href="/restorent/cnf/menu" className="mr-7"> Menu </Link>
        </nav>
    </>);
}

export default Restorentnav;