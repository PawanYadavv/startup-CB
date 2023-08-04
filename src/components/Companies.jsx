import React from 'react';
import logo1 from './Images/logo1.svg';
import logo3 from './Images/logo3.svg';
import logo6 from './Images/logo6.svg';
import logo8 from './Images/logo8.svg';
import logo9 from './Images/logo9.svg';
import logo10 from './Images/logo10.svg';
import logo11 from './Images/logo11.svg';
import logo12 from './Images/logo12.svg';
import logo13 from './Images/logo13.svg';
import logo14 from './Images/logo14.svg';
import logo15 from './Images/logo15.svg';
import logo16 from './Images/logo16.svg';
import logo17 from './Images/logo17.svg';
import logo18 from './Images/logo18.svg';

import "./Companies.css";

const Company = () => {
  const logos = [
    logo1, logo3, logo6, logo8, logo9, logo10, logo11, logo12, logo13, logo14,
    logo15, logo16, logo17, logo18
  ];

  return (
    <div>
      <section className='Companies-logo'>
        <span className='Companies-heading'>More than 10,000 top companies</span>
        <div className='Companies-images'>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              style={{
                height: index === 10 ? '32px' : '35px',
                margin: '50px'
              }}
            />
          ))}
        </div>
</section>
<section>
<div class="numbers-grid">
  <div id="w-node" class="numb-column">
  <h3 class="heading-numbers">3x</h3>
  <p class="numb-paragraph">faster candidate submissions</p>
  </div>
  <div id="w-node" class="numb-column">
    <h3 class="heading-numbers">30%</h3>
    <p class="numb-paragraph">more candidate placements</p></div>

    <div id="w-node" class="numb-column">
      <h3 class="heading-numbers">100%</h3>
      <p class="numb-paragraph">client satisfaction</p></div>
      </div>
</section>
        </div>
  );
};

export default Company;
