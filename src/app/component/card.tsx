import Link from "next/link";
import { restorentCardType } from "../page";
import RestorentPrice from "./Price";

interface Props{
    restorent : restorentCardType
}

function Card({restorent}:Props) {
    return (
        <>
            <div
                className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
            >
                <Link href={`/restorent/${restorent.slug}`}>
                <img
                    src={restorent.main_image}
                    alt=""
                    className="w-full h-36"
                />
                <div className="p-1">
                    <h3 className="font-bold text-2xl mb-2">{restorent.name}</h3>
                    <div className="flex items-start">
                        <div className="flex mb-2">*****</div>
                        <p className="ml-2">77 reviews</p>
                    </div>
                    <div className="flex text-reg font-light capitalize">
                        <p className=" mr-3">{restorent.region.name}</p>
                        
                        <RestorentPrice price={restorent.price} />
                        <p>{restorent.location.name}</p>
                    </div>
                    <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
                </Link>
            </div>
        </>
    );
}

export default Card;