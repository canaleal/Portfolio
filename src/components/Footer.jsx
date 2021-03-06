/* eslint-disable max-len */
import GridLayout from 'layouts/GridLayout';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [portfolioList] = useState([
    {
      id: 0,
      name: 'Projects and APIs',
      link: '/projects',

    }, {

      id: 1,
      name: 'Gallery',
      link: '/gallery',
    }, {

      id: 2,
      name: 'Work',
      link: '/about',

    },
    {

      id: 3,
      name: 'Education',
      link: '/about',

    }]);

  const [applicationToolsList] = useState([
    {
      id: 0,
      name: 'Animista',
      link: 'https://animista.net/play/basic',
    },

    {
      id: 1,
      name: 'Developer Icons',
      link: 'https://devicon.dev/',
    },
    {
      id: 2,
      name: 'Color Designer',
      link: 'https://colordesigner.io/tools',
    },
    {
      id: 3,
      name: 'Font Awesome',
      link: 'https://fontawesome.com/',
    },
    {
      id: 4,
      name: 'Cool Backgrounds',
      link: 'https://coolbackgrounds.io/',
    },
    {
      id: 5,
      name: 'Gradient Generator',
      link: 'https://cssgradient.io/',
    },
  ]);

  const [aboutList] = useState([
    {
      id: 0,
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/alex-canales',
    },
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com/canaleal',
    },
    {
      id: 2,
      name: 'Bitbucket',
      link: 'https://bitbucket.org/Canaleal/',
    },
  ]);

  return (
    <footer className="bg-smoke mt-4  ">
      <hr />

      <GridLayout columns="md:grid-cols-3" paddingY="py-8">

        <div className="col-span-1 py-2">

          <p className="font-bold">Portfolio</p>

          {portfolioList.map((item) => (
            <div key={item.id} className="my-2">
              <Link to={{ pathname: `${item.link}` }} className="text-sm  hover:underline">{item.name}</Link>
            </div>
          ))}

        </div>

        <div className="col-span-1 py-2">

          <p className="font-bold">Application Tools</p>
          {applicationToolsList.map((item) => (
            <div key={item.id} className="my-2">
              <a href={`${item.link}`} target="_blank" rel="noreferrer" className="text-sm  hover:underline">{item.name}</a>
            </div>
          ))}

        </div>

        <div className="col-span-1 py-2">

          <p className="font-bold">About</p>

          {aboutList.map((item) => (
            <div key={item.id} className="my-2">
              <a href={`${item.link}`} target="_blank" className="text-sm  hover:underline" rel="noreferrer">{item.name}</a>
            </div>
          ))}

        </div>

      </GridLayout>

      <GridLayout columns="md:grid-cols-3" paddingY="py-8">

        <div className="col-span-1 py-2">
          <p className="font-bold">Disclaimer</p>
          <p className="font-bold text-xs my-2"> ?? Alex Canales Portfolio. All rights reserved. </p>
          <p className="font-bold text-xs my-2">Website Terms and Policies</p>

          <p className="text-xs my-2">
            If you require any more information or have any questions about our sites disclaimer, please feel free to contact me by email at alexcanales766@gmail.com. The Disclaimer was generated with the help of the Disclaimer Generator.
            All the information on this website - Showcase - is published in good faith and for general information purpose only.
          </p>

        </div>

        <div className="col-span-1 py-2 " />

        <div className="col-span-1 py-2 ">
          <p className="font-bold">License Terms</p>
          <img height={100} width={150} className="h-16 my-2" src="https://www.rbg.ca/app/uploads/RBG_Horizontal_Black_CMYK.svg?x96454" data-src="https://www.rbg.ca/app/uploads/RBG_Horizontal_Black_CMYK.svg?x96454" loading="lazy" alt="RRBG logo_Horizontal_Black_CMYK" data-was-processed="true" />
          <p className="text-xs my-2">The contents of the Royal Botanical Gardens site are copyrighted and redistribution, reproductions, or publication of its contents is prohibited without the express written consent of Royal Botanical Gardens. </p>
        </div>

      </GridLayout>
    </footer>
  );
}

export default React.memo(Footer);
