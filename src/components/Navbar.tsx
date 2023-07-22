import { Link } from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useScrollPosition} from "../hooks/useScrollPosition.ts";
import { BiHome, BiEuro, BiPhotoAlbum, BiEnvelope } from "react-icons/bi";

export default function Navbar() {
    const navRef = useRef<HTMLHeadingElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [top, setTop] = useState<number>();
    const scrollPosition = useScrollPosition();

    useEffect(() => {
        setTop(navRef.current?.getBoundingClientRect().top);

        document.addEventListener('mousedown', ({target}: MouseEvent) => {
            if(!navRef.current?.contains(target as Node) && isNavOpen) setIsNavOpen(false);
        })
    }, [isNavOpen, scrollPosition])

    return (
        <nav ref={navRef} className={`sticky top-0 w-full pt-4 pb-4 text-white h-16 z-10`}>
            <div className="flex justify-between items-center">
                <button className="ml-2 z-20" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <span className={"block h-1 w-10 bg-ternary rounded duration-500" +
                        (isNavOpen ? " transition-transform translate-y-1.5 rotate-45" : "")}>
                    </span>
                    <span className={"block h-1 w-10 bg-ternary rounded mt-1.5 duration-500" +
                        (isNavOpen ? " transition-transform -translate-y-1 -rotate-45" : "") }>
                    </span>
                    <span className={"block h-1 w-10 bg-ternary rounded mt-1.5 duration-500" +
                        (isNavOpen ? " transition-all -translate-y-3.5 -rotate-45 invisible" : " visible")}>
                    </span>
                </button>
                <div className={`w-fit mr-2 transition-all duration-300 ${top == 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16 -translate-x-10 scale-150"}`}>
                    <h2 className={"block text-3xl font-extrabold text-primary bg-ternary px-2 transition-all duration-300 " +
                        (top == 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16 -translate-x-10 scale-150")}>
                        BYVALS
                    </h2>
                </div>
            </div>

            <ul ref={menuRef}
                className={`absolute z-20 mt-4 px-3 pt-7 transition-all duration-500 bg-ternary rounded-r-lg drop-shadow-xl
                ${isNavOpen ? "opacity-100 translate-x-0 z-20" : "-z-10 opacity-0 -translate-x-20 pointer-events-none"}`}>
                <li className="mb-4">
                    <Link to={"/"} className="flex items-center text-xl font-bold transition-all duration-500 ease-out
                    p-2 text-primary hover:bg-white rounded-md hover:drop-shadow-lg">
                        <BiHome /><p className="ml-2">Accueil</p>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to={"/pricing"} className="flex items-center text-xl font-bold transition-all duration-500 ease-out
                    p-2 text-primary hover:bg-white rounded-md hover:drop-shadow-lg">
                        <BiEuro /><p className="ml-2">Tarifs</p>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to={"/gallery"} className="flex items-center text-xl font-bold transition-all duration-500 ease-out
                    p-2 text-primary hover:bg-white rounded-md hover:drop-shadow-lg">
                        <BiPhotoAlbum /><p className="ml-2">Photos</p>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to={"/contact"} className="flex items-center text-xl font-bold transition-all duration-500 ease-out
                    p-2 text-primary hover:bg-white rounded-md hover:drop-shadow-lg">
                        <BiEnvelope /><p className="ml-2">Contact</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}