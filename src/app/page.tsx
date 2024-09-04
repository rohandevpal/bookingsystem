
import Image from "next/image";
import NavBar from "./component/Navbar";
import Header from "./component/Header";
import Card from "./component/card";
import { PrismaClient, Location, Region, PRICE } from "@prisma/client";
import { promises } from "fs";
//adminrohanpal
//adminrohanpal

//define type 
export interface restorentCardType {
  id: number
  name: string
  main_image: string
  location: Location
  region: Region
  price: PRICE
  slug: string
}


const prisma = new PrismaClient()

const fetchrestorents = async (): Promise<restorentCardType[]> => {
  let restorents = await prisma.restorent.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      location: true,
      region: true,
      price: true,
      slug:true
    }
  });
  return restorents;

}

export default async function Home() {

  const restronts = await fetchrestorents();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restronts.map((restront) => (
          <Card restorent = {restront} />
        ))}
      </div>
    </main>
  );
}
