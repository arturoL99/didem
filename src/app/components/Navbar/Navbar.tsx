import { FC } from "react";
import Image from "next/image";
import logo from "../../images/logo_v1@2x.png";
import Link from "next/link";


const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <div className="">
                <Image src={logo} alt="logo" className="navbar_logo"/>
            </div>
            <div className="navbar_links">
                <Link href={""}>CHI SIAMO</Link>
            </div>
        </nav>
    );
};

export default Navbar;
