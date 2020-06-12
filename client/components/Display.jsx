import React from 'react';
import CompanyCard from './CompanyCard.jsx';
import Financials from './Financials.jsx';

export default function Display(props) {
  return (
    <span className='Display'>
      <CompanyCard companyData={props.companyData} />
      <Financials companyData={props.companyData} />
    </span>
  );
}
