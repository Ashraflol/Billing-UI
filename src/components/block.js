import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity } from '../features/billslice'

function Block(props) {
    console.log(props.mainitems)
    // const[count,setcount]=useState(0)
    const dispatch = useDispatch()
    function handleclick(sign){
        if(props.items.quantity!=0 || sign==+1){
            dispatch(updateQuantity({ itemId: props.items.id, quantity:  props.items.quantity+sign}))
        }
    }
    return(
        <div key={props.num} className={(props.iscreatebill ? 'col-md-4' : 'col-md-3') + ' col-sm-6 py-3 px-2'}>
            <div className='blocksize rounded'>
                {!props.iscreatebill && 
                <a href={props.urls}>
                    <div>
                        <img src={props.image}></img>
                        <p>{props.items}</p>
                    </div>
                </a>}
                {props.iscreatebill && 
                <a onClick={()=>{handleclick(+1)}} className='cursor-pointer'>
                    <div>
                        <img src={props.image}></img>
                        <p>{props.items.name}</p>
                    </div>
                </a>}
                {props.iscreatebill && 
                <div className='container'>
                    <div className='row'>
                        <button className='col-4 border py-3 cursor-pointer' onClick={()=>{handleclick(-1)}}>
                            -
                        </button>
                        <button className='col-4 border py-3 cursor-pointer'>
                            {props.items.quantity}
                        </button>
                        <button className='col-4 border py-3 cursor-pointer' onClick={()=>{handleclick(+1)}}>
                            +
                        </button>
                    </div>
                </div>
                }
                
            </div>
        </div>
      );
}

export default Block;
