import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='w-full flex justify-center items-center pt-12 pb-24 sticky'>
      <Link href='/'>
        <div className='shake'>
          <Image
            alt='logo'
            src='/logo.png'
            width={200} // Puedes ajustar este tamaño según sea necesario
            height={200} // Puedes ajustar este tamaño según sea necesario
            sizes='(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px'
            style={{ objectFit: 'contain' }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
