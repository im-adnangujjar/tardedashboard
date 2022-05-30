import React from 'react'
import drop from '../../assets/icons/drapDown.png'
import { styles } from './DropDownStyle'

function DropDown(props) {
    return (
        <div style={styles.flex}>
            <img src={drop} alt='image not found' />

            <select style={{ backgroundColor: '#292B32',color:'white', outline: 'none' }}
                name="rank" id="rank1">
                <option value="rank">{props.title}</option>
                <option value="Rank">Rank</option>
                <option value="Rank">Rank</option>
                <option value="Rank">Rank</option>
            </select>
        </div>
    )
}

export default DropDown