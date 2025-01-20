import React from 'react'

function Card( props ) {
    console.log('card props', props.data.category)
    return (
        <div className='min-h[100px] round-lg shadow'>
                      <h2 className='text-pretty text-lg font-extralight m-2 bg-slate-300 p-2'>{props.data.category}</h2>
          <img src={props.data.image} alt='product' />

          <div className='p-2 text-sm'>{props.data.description}</div>
        </div>
    )
}

export default Card