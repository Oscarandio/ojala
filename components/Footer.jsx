/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='relative bg-pink rounded-t-3xl -mt-6 px-3'>
        <div className='container mx-auto flex  gap-12 justify-between py-6 md:py-16 border-b border-white'>
          <div className='text-2xl md:text-6xl text-white'>
            <h3>
              Let's <strong>discuss</strong> your
            </h3>
            <div className='flex gap-4'>
              <h3>vision</h3>
              <h3>
                <strong>with us</strong>
              </h3>
            </div>
          </div>
          <div>
            <ul className='text-white text-end'>
              <li>C/ Aurora, 35</li>
              <li>City Ville, 03003</li>
              <li>+(34) 900 000 000</li>
              <li>cerky@hello.com</li>
            </ul>
          </div>
        </div>
        <div className='container mx-auto flex flex-wrap justify-center md:justify-between items-center pb-8'>
          <div className='py-10 shake'>
            <Link href='/'>
              <Image
                alt='logo'
                src='/logo-white.png'
                width={353}
                height={353}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
          <div>
            <ul className='flex gap-8 text-white'>
              <Link href='/sobre-nosotros'>
                <li>About Us</li>
              </Link>
              <li>Projects</li>
              <li>CV</li>
              <li>News</li>
            </ul>
          </div>
        </div>
      </footer>
      <div></div>
    </>
  );
};

export default Footer;
