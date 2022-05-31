import React from 'react'
import { styles } from './InformationStyle'
import icons from "../../assets/icons/icon11.png"
import eth from '../../assets/icons/eth.png'
import { data } from '../../constants/Constant'



function Information({ data1 }) {
    return (

        <div style={styles.flex}>
            <div style={styles.flex1} >
                <img className="w-10 h-9 mr-2 rounded-md" src={data1.image} alt="image not found" />
                <p style={styles.title} className='w-14'>{data1.title}</p>
                <p style={{ color: data1.color }} className="w-20 text-sm">{data1.rank}</p>
                <p style={styles.rank} className="w-20">{data1.rank1}</p>
                <p style={styles.time} className="w-20">{data1.time}</p>
            </div>
            <div className='ml-28' style={styles.flex1}>
                <img className='mr-6' src={icons} alt="image not found" />
                <p className='w-16 text-white'>{data1.pixel}</p>
                <img className='w-2' src={data1.img} alt="image not found" />
                <p className='w-24 text-white'>{data1.prc}</p>
                <img src={eth} alt="image not found" />
                <p className='mr-5 ml-1 text-white'>{data1.id}</p>
                <p className="bg-[#6E34FF] w-16 text-center text-white rounded-md text-sm">{data1.buy}</p>
            </div>
        </div>
    )
}

export default Information