import NavBar from "../component/Navbar";
import Sidebar from "./component/sidebar";
import SearchHeader from "./component/header";
import Restorentcart from "./component/restorentcart";
export default function SearchPage() {
    return (
        <>
            <SearchHeader />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <Sidebar />
                <div className="w-5/6">
                    <Restorentcart />
                </div>
            </div>
        </>
    )
}