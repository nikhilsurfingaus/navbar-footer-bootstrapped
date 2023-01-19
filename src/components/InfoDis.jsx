import React from 'react'
import InfoSection from './InfoSection'
import img from '../assets/images/booty.png'

const homeObjFour = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: '> npm i bootstrap',
    headline: 'Bootstrap is very nice',
    description:'You will never have to worry about how terrible Tailwind CSS is and writing a seperate CSS file now with Bootstrap 5.',
    buttonLabel: 'Try Bootstrap Today',
    imgStart: 'start',
    img: img,
    alt: 'Vault',
    start: 'true'
};

function InfoDis() {
  return (
    <>

        <InfoSection id="/info" {...homeObjFour} />

    </>
  )
}

export default InfoDis