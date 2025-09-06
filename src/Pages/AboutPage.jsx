import React from 'react'
import Rbutton from '../Components/Button';

export const Calculateage= () => {
  const currentYear = new Date().getFullYear();
  return currentYear - 1998;
}

const AboutPage = () => {
  return (
    <div>
      AboutPage <Rbutton text={"About Button"}/>
      </div>
  )
};

export default AboutPage;