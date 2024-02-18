import React from 'react';
import selectedImage from '../../../public/1200px-Bugatti_La_Voiture_Noire,_GIMS_2019,_Le_Grand-Saconnex_(GIMS0951).jpg'
import Image from 'next/image';
const Header = () => {
    return (
        <div className='md:h-[80vh] w-full m-auto'>
            <Image className="w-full m-auto object-cover md:h-[80vh]"
                src={selectedImage}
                width={0}
                height={0}
                alt=""
            />
        </div>
    );
};

export default Header;