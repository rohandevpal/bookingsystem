import Image from "next/image";
import NavBar from "./component/Navbar";
import Header from "./component/Header";
import Card from "./component/card";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Card />
          </div>
        </main>
      </main>
    </main>
  );
}
