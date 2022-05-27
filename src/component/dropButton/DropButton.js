import React from 'react'

function DropButton(props) {
  return (
    <div>
        <select style={{ backgroundColor: '#292B32',color:'white', outline: 'none',padding:'5px' }}
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
