/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Logo from '@/components/Logo';

const Home = () => {
  return (
    <header className='relative min-h-screen'>
      {/* Imagen de cabecera */}
      <Image
        alt='header'
        src='/header.jpg'
        fill
        style={{ objectFit: 'cover' }}
      />

      {/* Capa superpuesta con color negro y opacidad */}
      <div className='absolute inset-0 bg-black opacity-30'></div>

      {/* Contenedor del logo */}
      <Logo />
      <div className='absolute bottom-20 left-3 xl:left-20 text-white uppercase'>
        <h1 className='text-2xl xl:text-5xl'>
          Somos <strong>EDU</strong> Y <strong>MIGUEL</strong>
        </h1>
        <h2 className='text-2xl xl:text-5xl'>
          <strong>DIRIGIMOS</strong> COSAS BONITAS
        </h2>
      </div>
    </header>
  );
};

export default Home;
