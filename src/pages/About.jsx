import React from 'react';

const About = () => {
  return (
    <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
      <div className='lg:w-10/12 w-full'>
        <h2 className='xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore, ipsa
          incidunt numquam doloremque minima rem neque dolor quis tenetur.
        </h2>
        <p className='font-normal text-base leading-6 text-gray-600 mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit animi
          labore hic facere possimus, nemo natus expedita? Sed cupiditate eaque quidem in
          dicta quis consequuntur praesentium sit. Totam reiciendis ullam aspernatur
          sequi, culpa unde tempore exercitationem saepe sunt vero?
        </p>
      </div>

      <div className='lg:mt-14 sm:mt-10 mt-12'>
        <img
          className='lg:block hidden w-full'
          src='https://i.ibb.co/GvwJnvn/Group-736.png'
          alt='Group of people Chilling'
        />
        <img
          className='lg:hidden sm:block hidden w-full'
          src='https://i.ibb.co/5sZTmHq/Rectangle-116.png'
          alt='Group of people Chilling'
        />
        <img
          className='sm:hidden block w-full'
          src='https://i.ibb.co/zSxXJGQ/Rectangle-122.png'
          alt='Group of people Chilling'
        />
      </div>

      <div className='lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12'>
        <div className='w-full xl:w-5/12 lg:w-6/12'>
          <h2 className='font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800'>
            Our Story
          </h2>
          <p className='font-normal text-base leading-6 text-gray-600 mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus amet quae
            harum iste neque impedit, autem sit aperiam iusto voluptas nostrum, eius
            provident. Sed reprehenderit natus possimus excepturi minima aperiam veniam?
            Velit soluta corrupti fuga hic asperiores tempora nobis. Mollitia neque ipsa
            accusamus repellat, amet nobis quo voluptates labore! Labore, illo eaque vero
            doloremque saepe facilis. Labore tempore est voluptatem?
          </p>
          <p className='font-normal text-base leading-6 text-gray-600 mt-6'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, aut provident
            laboriosam animi, consequuntur veniam ad, cupiditate maiores quo doloremque
            soluta impedit. Mollitia perspiciatis cumque, unde non ipsam debitis et illum,
            voluptatum doloribus repellat exercitationem. Molestiae in tempore quae
            aliquid non consequuntur id dicta numquam quidem, ducimus itaque veniam
            debitis. Perspiciatis autem expedita culpa inventore itaque earum illum nemo
            asperiores.
          </p>
        </div>
        <div className='lg:flex items-center w-full lg:w-1/2 '>
          <img
            className='lg:block hidden w-full'
            src='https://i.ibb.co/2kxWpNm/Group-740.png'
            alt='people discussing on board'
          />
          <img
            className='lg:hidden sm:block hidden w-full h-3/4'
            src='https://i.ibb.co/ZLgK3NQ/Group-788.png'
            alt='people discussing on board'
          />
          <img
            className='sm:hidden block w-full'
            src='https://i.ibb.co/9g2R7Xr/Group-803.png'
            alt='people discussing on board'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
