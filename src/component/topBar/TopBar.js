import React from 'react'
import styles from './TopBarStyle'
import image from '../../assets/images/image8.png'
import search from '../../assets/icons/searchIcon.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import Bitmap from '../../assets/images/Bitmap.png'
import Union from '../../assets/icons/Union.png'
import icon1 from '../../assets/icons/icon1.png'
import group from '../../assets/icons/Group.png'
import icon from '../../assets/icons/icon.png'
import social from '../../assets/icons/socialIcon.png'



function TopBar() {
    return (
        <div className='pt-6'>

            <div style={styles.flex1}>
                <div style={styles.flex} >
                    <div style={styles.flex}>
                        <img className='w-14 h-16 ' src={image} alt="image not found" />
                        <h3 className='ml-5 text-white'>project's name</h3>
                    </div>
                    <img className='ml-4 ' src={Union} alt='icon not found' />
                    <img className='ml-3 ' src={icon1} alt='icon not found' />
                    <img className='ml-3 ' src={group} alt='icon not found' />
                    <img className='ml-3 ' src={icon} alt='icon not found' />
                    <img className='ml-3 ' src={social} alt='icon not found' />
                </div>
                <div style={styles.search} >
                    <input style={styles.input} type='text' placeholder='Token ID' />
                    <div style={styles.display} className='bg-sky-500/100 w-24 h-9 mr-10'><img className="mr-1" src={search} alt='icon not found' />
                        <p style={styles.text}>search</p>
                    </div>
                </div>
            </div>

            <div style={styles.flex} className='mt-3 mb-8'>
                <p className='text-white text-sm'>Top Collections :</p>
                <div style={styles.flex2} className='bg-[#292B32] w-64 h-7 rounded-lg mr-3 ml-6 '><img className='w-4 h-6  mr-2' src={image2} alt='image not found' /><p className='text-white text-xs'>Moonbird has 6 listing until +30% floor</p></div>
                <div style={styles.flex2} className='bg-[#292B32] w-80 h-7 rounded-lg mr-3  '><img className='w-4 h-5   mr-2' src={Bitmap} alt='image not found' /><p className='text-white text-xs'>Larva Doods minted 300 times in the last 5 minutes</p></div>
                <div style={styles.flex2} className='bg-[#292B32] w-64 h-7 rounded-lg '><img className='w-4 h-4  mr-2' src={image3} alt='image not found' /><p className='text-white text-xs'><span className='text-blue'>Moonbird</span> has 6 listing until +30% floor</p></div>
            </div>
        </div>
    )
}

export default TopBar