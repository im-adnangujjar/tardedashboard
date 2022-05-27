import React from 'react'

import { ResponsiveBar } from "@nivo/bar";
import { generateCountriesData } from "@nivo/generators";
import DropDown from '../dropDown/DropDown';
import DropButton from '../dropButton/DropButton';
import OnButton from '../../onButton /OnButton';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",

};

const keys = ["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"];
const commonProps = {
  data: generateCountriesData(keys, { size: 7 }),
  indexBy: "country",
  keys,
  padding: 0.8,


  labelTextColor: "inherit:darker(1.4)",
  labelSkipWidth: 500,
  labelSkipHeight: 10,
  layout: 'v',
};

export default function graphjs() {
  return (
    <div  className='bg-[#202226]w-screen h-44 ml-32'>
      <div  className='mt-10' style={{ display: 'flex', justifyContent:'space-between', width:'700px', alignItems:'center', }}>
        <h2 className='text-white  text-xl'>Live Listings </h2>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <DropButton title="Grop Size 0.01" />
          <p className="text-white text-xs font-normal  ml-6 mr-6">Ladder</p>
          <OnButton />
        </div>
      </div>
      <div style={{ height: 200,position:'relative' }}>
        <ResponsiveBar width='700' height='180' {...commonProps} />
      </div>
<div style={{display:'flex',alignItems:'center', justifyContent:'space-between',color:'white',width:'80%' }}>
  <p>Holders with</p>
  <p>1 token</p>
  <p>2-4 tokens</p>
  <p>5-9 tokens</p>
  <p>10+ tokens</p>
</div>


    </div>
  )
}
