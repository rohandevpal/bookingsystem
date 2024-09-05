import { Metadata } from "next/types";
import HeaderRestorent from "./components/header";


export const metadata: Metadata = {
  title: " | Restorent",
  description: "Generated by create next app",
  keywords: ["rohan", "developer"]
};

export default function restorentlayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { slug: string }

}) {
  return (
    <>
      <HeaderRestorent slug={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  )
}