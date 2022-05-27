import React from 'react'
import styles from './RuleStyle'

function Rule({ data }) {
  return (
    <div style={styles.flex} className='bg-[#292B32] w-44 h-20'>
      <div style={styles.center} className='bg-[#31323A] w-14 h-14 ml-3 mr-3'>
        <img src={data.img} alt='image not found'/>
      </div>
      <div >
        <h3>{data.title}</h3>
        <p>{data.descripation}</p>
      </div>
    </div>
  )
}

export default Rule