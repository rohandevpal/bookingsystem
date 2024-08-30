import NavBar from "../component/Navbar";
import Sidebar from "./component/sidebar";
import SearchHeader from "./component/header";
import Restorentcart from "./component/restorentcart";
export default function SearchPage() {
    return (
        <>
            <main className="bg-gray-100 min-h-screen w-screen">
                <main className="max-w-screen-2xl m-auto bg-white">
                    <NavBar />
                    <SearchHeader />
                    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                        <Sidebar />
                        <div className="w-5/6">
                            <Restorentcart />
                        </div>
                    </div>
                </main>
            </main>

        </>
    )

}