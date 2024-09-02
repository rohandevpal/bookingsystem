import HeaderRestorent from "./components/header";

export default function restorentlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
            <HeaderRestorent />
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                {children}
            </div>
        </>
    )
}