import Image from "next/image";
import NavBar from "./component/Navbar";
import Header from "./component/Header";
import Card from "./component/card";
//adminopenbookingsystem

async function getData(){
  const response = await fetch('https://api.github.com/repositories/471339241');
  const data = await response.json();
  return data;
}

async function getTime() {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata',{
      next:{
        revalidate: 3,
      }
    });
    const date = await response.json();
    return date;
}

export default async function Home() {
  const [data, time] = await Promise.all([getData(), getTime()]);
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* <p>{data.full_name}</p>
        <p>{time.datetime}</p> */}
        <Card />
      </div>
    </main>
  );
}
