import React from 'react'
import { styles } from './DropButtonStyle'

function DropButton(props) {
  return (
    <div>
        <select style={styles.mainContainer} 
                name="rank" id="rank1">
                <option value="rank">{props.title}</option>
                <option value="Rank">Rank</option>
                <option value="Rank">Rank</option>
                <option value="Rank">Rank</option>
            </select>
    </div>
  )
}

export default DropButton 
