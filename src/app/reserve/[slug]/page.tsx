import NavBar from "@/app/component/Navbar";
import ReserveHeader from "../components/header";
import Reserveform from "../components/formreserve";
export default function ReservationPage() {
    return (
        <>
            <main className="bg-gray-100 min-h-screen w-screen">
                <main className="max-w-screen-2xl m-auto bg-white">
                    <NavBar />
                    <div className="border-t h-screen">
                        <div className="py-9 w-3/5 m-auto">
                            <ReserveHeader />
                            <Reserveform />
                        </div>
                    </div>
                </main>
            </main>
        </>
    )
}