"use client";

import Link from "next/link";
import style from '../Navbar/Navbar.css'
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link
            href={item.path}
            className={`${style.container} ${pathName === item.path && style.active
                }`}
        >
            {item.title}
        </Link>
    );
};

export default NavLink;