
import Links from './Links/Links';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex '>
            <div>
                <Link href={'/'}>#rzak</Link>
            </div>
            <div>
                <Links></Links>
                {/* <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/blog'}>Blog</Link> */}
            </div>
        </div>
    );
};

export default Navbar;