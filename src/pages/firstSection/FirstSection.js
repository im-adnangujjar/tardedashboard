import React from 'react'
import DropDown from '../../component/dropDown/DropDown'
import Information from '../../component/information/Information'
import Informationpart2 from '../../component/informationPart2/InformationPart2'
import Rule from '../../component/rule/Rule'
import SideBar from '../../component/sideBar/SideBar'
import TopBar from '../../component/topBar/TopBar'
import { data, data1, data2 } from '../../constants/Constant'
import styles from './FirstSectionStyle'
import Graph from '../../component/graph/Graph'
import Graph2 from '../../component/graph/Graph2'
import DropButton from '../../component/dropButton/DropButton'
import OnButton from '../../onButton /OnButton'



function FirstSection() {
  return (
    <div className='bg-[#282C30]' style={{ overflowX: 'auto' }}>
      <div style={styles.flex}>
        <div>
          <SideBar className='w-20 h-screen' />
        </div>
        <div >
          <TopBar />
          <div className=' pl-4' style={styles.flex}>
            {
              data.map((item, index) => {
                return <div key={index}><Rule data={item} /></div>
              })}

          </div>
          <div className='pl-4' style={styles.flex}>
            <div>
              <div style={styles.flex1}>
                <h3 className='text-white text-xl pl-4'> Listing (893)</h3>
                <div style={styles.flex}>
                  <DropDown title="Rank" />
                  <DropDown title="Price" />
                  <DropDown title="Date" />
                </div>
              </div>
              {
                data1.map((item, index) => {
                  return <div key={index}><Information data1={item} /></div>
                })}
              <div style={styles.flex1}>
                <h3 className='text-white text-xl pl-4'> Trades <span>(2500)</span></h3>
                <div style={styles.flex}>
                  <DropDown title="Rank" />
                  <DropDown title="Price" />
                </div>
              </div>

              {
                data2.map((item, index) => {
                  return <div key={index}><Informationpart2 data2={item} /></div>
                })}
            </div>
            <div>
              <div classname='ml-32' style={{ height: '550px', marginLeft: '128px',marginRight:'40px' }}>
                <div style={styles.flex1}>
                <div className='text-white '>Trades</div>
                <div style={styles.flex}>
                  <div className='mr-6'>
                 <DropButton title='Interval 5M'/> 
                 </div>
                 <div className='mr-6'>
                 <DropButton title='span 7D'/> 
                 </div>
                 
                 <p className='text-white mr-6'>Outliers</p> <OnButton/>
                 </div>
                 </div>

                <Graph2 />
              </div>
              <Graph />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FirstSection