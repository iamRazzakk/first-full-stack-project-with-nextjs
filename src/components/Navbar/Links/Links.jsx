import Link from 'next/link';
import React from 'react';

const Links = () => {
    const links = [
        {
            title: 'homePage',
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: 'Contact',
            path: "/contact"
        },
        {
            title: 'Blog',
            path: "/blog"
        }
    ]
    return (
        <div className=''>
            {
                links?.map(link => (
                    <Link key={link?.title} href={link?.path}>
                        {link?.title}
                    </Link>
                ))
            }
        </div>
    );
};

export default Links;