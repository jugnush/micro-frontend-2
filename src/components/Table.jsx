import React from 'react'
import Card from './Card.jsx';

function Table( props ) {
  const [data, setData] = React.useState([]);

  console.log('jugnu props', props.data);
  return (
   
   <div className='border-spacing-1'>
    
    <div className='m-4 grid grid-cols-4  gap-4'>
    {
              props.data.map((item, index) => {
                return (  
                  <Card data={item}/>
                )
              } )
            }
      
    </div>
    {/* <ul>
      <li>
      {
              props.data.map((item, index) => {
                return (  
                    <th key={item.id}>{item.title}</th>
                )
              } )
            }
      </li>

    </ul> */}
   </div>
  )
}

export default Table