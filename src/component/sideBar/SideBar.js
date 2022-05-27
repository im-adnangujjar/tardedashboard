import React from 'react'
import styles from './SideBarStyle'
import icon from '../../assets/icons/Vector.png'
import icon1 from '../../assets/icons/Vector1.png'
import icon2 from '../../assets/icons/Vector2.png'
import icon3 from '../../assets/icons/Vector3.png'
import icon4 from '../../assets/icons/Vector4.png'
import icon5 from '../../assets/icons/Vector5.png'




function SideBar() {
    return (
     
            <div style={styles.center} className='bg-[#202226] w-20 h-full'>
                <img className='mb-20 mt-9' src={icon} alt="icon" />
                <hr className='decoration-white'/>
                <img className='w-4 h-4 mb-9' src={icon1} alt="icon" />
                <img className='w-4.2 h-4.2 mb-9' src={icon2} alt="icon" />
                <img className='w-4 h-4 mb-9'  src={icon5} alt="icon" />
                <img className='w-3.5 h-5 mb-9' src={icon3} alt="icon" />
                <img className='w-4.1 h-4' src={icon4} alt="icon" />
            </div>
     
    )
}

export default SideBar