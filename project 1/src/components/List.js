import React from 'react';
import '../styles/List.css';

const List = (props) => {
  return (
    <div className='list-container'>
        <div className='list-container__title'>EXISTING ARRAY</div>
        {

            props.existingList.length===0 
            ? 
            (<p>No item in array</p>)
            :
            props.existingList.map((item) =>{
                let classAssign = props.filteredList[item]===0 ?'skip ':''
                return <div key={item} className={classAssign} >{item}</div>
            })
        }
    </div>
  )
}

export default List
