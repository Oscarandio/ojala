import Image from 'next/image';
import Logo from '@/components/Logo';

const About = () => {
  return (
    <div className='bg-dark relative'>
      <Logo />

      <div className='container px-3 xl:w-2/4 mx-auto flex flex-wrap xl:flex-nowrap gap-12 xl:gap-24 pb-12 xl:pb-24'>
        <div className='xl:w-1/4'>
          <h1 className='text-white text-2xl sm:text-4xl uppercase'>
            <strong>NUESTRA HISTORIA</strong>
          </h1>
          <div className='flex xl:block gap-6 sm:gap-12'>
            <div>
              <Image
                src='/miguel.png'
                alt='Miguel Trias'
                width={380}
                height={247}
                style={{ objectFit: 'cover' }}
                className='mt-8 rounded-xl'
              />
              <button
                type='button'
                className='font-bold uppercase border border-white rounded-3xl px-5 py-2 my-4 ml-8 text-white'>
                MIGUEL TRIAS
              </button>
              <p className='ml-6 text-white italic'>Co-founder</p>
            </div>
            <div>
              <Image
                src='/miguel.png'
                alt='Miguel Trias'
                width={380}
                height={247}
                style={{ objectFit: 'cover' }}
                className='mt-8 rounded-xl'
              />
              <button
                type='button'
                className='font-bold uppercase border border-white rounded-3xl px-5 py-2 my-4 ml-8 text-white'>
                MIGUEL TRIAS
              </button>
              <p className='ml-6 text-white italic'>Co-founder</p>
            </div>
          </div>
        </div>

        <div className='w-full text-white'>
          <div className='text-2xl italic'>
            <p className='ml-10 mb-4'>
              <span className='text-pink'>
                <strong>E:</strong>
              </span>{' '}
              Oye Miguel, tu lo de dirigir te ves juntándote con alguien?
            </p>
            <p>
              <span className='text-pink'>
                <strong>M:</strong>
              </span>{' '}
              Ojalá tío, la verdad que llevo tiempo pensando que con una dupla
              funcionaría bastante guay
            </p>
          </div>
          <div className='text-2xl italic xl:mt-20'>
            <p className='ml-10 mb-4'>
              <span className='text-pink'>
                <strong>E:</strong>
              </span>{' '}
              Pues qué, ¿Probamos?
            </p>
            <p>
              <span className='text-pink'>
                <strong>M:</strong>
              </span>{' '}
              Venga.
            </p>
          </div>
          <div className='text-xl italic'>
            <p>
              Así montamos Ojalá, una dupla de dos locos de Barcelona que han
              unido fuerzas para enfrentarse al mundo audiovisual. Lo bueno: que
              llevan años a sus espaldas trabajando en agencias de publicidad y
              saben cómo funciona la cosa. Lo malo: aún no lo sabemos.
            </p>
            <p>
              ¿Que cómo nos complementamos? Edu se centra en la dirección de
              actores y de fotografía, y Miguel en la dirección de arte, la
              música y la edición. Eso sí, el guión y el tratamiento lo hacen
              los dos, que eso es mucho curro. 
            </p>
            <p>
              {' '}
              Porque juntar la visión de dos directores es una forma de hacer
              crecer una pieza. Y también es mucho más divertido. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
