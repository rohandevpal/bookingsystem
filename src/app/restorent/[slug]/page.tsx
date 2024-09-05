import NavBar from "@/app/component/Navbar"
import HeaderRestorent from "../components/header"
import Restorentnav from "../components/restorentnav"
import Restorenttitle from "../components/restorenttitle"
import Restorentrating from "../components/restorentrating"
import Restorentdsc from "../components/restorentdesc"
import Restorentimages from "../components/restorentimgs"
import Restorentreviews from "../components/restorentreviews"
import { PrismaClient } from "@prisma/client"
import { notFound } from "next/navigation" // You can use this to handle not found cases.
import { error } from "console"

const prisma = new PrismaClient();

interface Props {
    params: {
        slug: string
    }
}
interface RestorentType {
    id: number;
    name: string;
    description: string;
    images: string[];

}
const fetchRestorent = async (slug: string): Promise<RestorentType> => {
    const restorent = await prisma.restorent.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            description: true,
            images: true
        }
    })

    if (!restorent) {
        throw new Error();
    }
    return restorent
}

export default async function RestorentDetailsPage({ params }: Props) {
    const data = await fetchRestorent(params.slug);
    if (!data) {
        notFound(); // Handle when the restaurant is not found
    }

    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <Restorentnav slug = {data.name} />
                <Restorenttitle title={data.name} /> {/* Pass the name here */}
                <Restorentrating />
                <Restorentdsc description={data.description} /> {/* Pass the description */}
                <Restorentimages images={data.images} /> {/* Pass the images */}
                <Restorentreviews />
            </div>
            <div className="w-[27%] relative text-reg">
                <div className="fixed w-[15%] bg-white rounded p-3 shadow">
                    <div className="text-center border-b pb-2 font-bold">
                        <h4 className="mr-7 text-lg">Make a Reservation</h4>
                    </div>
                    <div className="my-3 flex flex-col">
                        <label htmlFor="">Party size</label>
                        <select name="" className="py-3 border-b font-light" id="">
                            <option value="">1 person</option>
                            <option value="">2 people</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col w-[48%]">
                            <label htmlFor="">Date</label>
                            <input type="text" className="py-3 border-b font-light w-28" />
                        </div>
                        <div className="flex flex-col w-[48%]">
                            <label htmlFor="">Time</label>
                            <select name="" id="" className="py-3 border-b font-light">
                                <option value="">7:30 AM</option>
                                <option value="">9:30 AM</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button
                            className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
                        >
                            Find a Time
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
