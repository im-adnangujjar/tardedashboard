import React from 'react'
import group from '../../assets/images/Group 3.png'
import Union from '../../assets/icons/Union.png'
import eth from '../../assets/icons/eth.png'

import styles from './InformationPart2Style'

function InformationPart2({ data2 }) {
    return (
        <div style={styles.flex}>
            <div style={styles.flex1} >
                <img className="w-10 mr-2 h-9 rounded-md" src={data2.image} alt="image not found" />
                <p style={styles.title} className='w-12'>{data2.title}</p>
                <p style={{ color: data2.color, }} className="w-20 text-sm">{data2.rank}</p>
                <p style={styles.rank} className="w-20" >{data2.rank1}</p>
                <p style={styles.time} className="w-20">{data2.time}</p>
            </div>
            <div className='ml-28' style={styles.flex1}>
                <img src={group} alt="image not found" />
                <img className="ml-6 mr-48" src={Union} alt="image not found" />
                <img src={eth} alt="image not found" />
                <p className="ml-2 mr-5 text-white">{data2.id}</p>
            </div>
        </div>
    )
}

export default InformationPart2