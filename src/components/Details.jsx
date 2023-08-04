import React from 'react';
import './Details.css'; // Import the CSS file for styling

const Company = () => {
  return (
    <div className="company-container">
      <div className="subsection">
        <h2>5X higher response from companies</h2>
        <p>
          Tired of having your applications ignored by companies? CareerBloomers only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!
        </p>
      </div>

      <div className="subsection">
        <h2>Your perfect job, delivered to you</h2>
        <p>
          Do you really want to look at thousands of irrelevant job postings or get spammed by job sites? At CareerBloomers, we do the work of finding the best jobs for you, so you can sit back and relax.
        </p>
      </div>

      <div className="subsection">
        <h2>Privacy guaranteed</h2>
        <p>
          We value your privacy very highly. You can block specific companies from viewing your profile. Or you can block all companies and just apply to specific ones yourself.
        </p>
      </div>
    </div>
  );
}

export default Company;
