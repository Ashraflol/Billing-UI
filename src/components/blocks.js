import React, { useState } from 'react';
import Block from './block';

function Blocks(props) {
    return(
        <div className='container mt-4'>
            <div className='row mx-5'>
                {props.mainitems.map((items,num)=>(
                    <Block key={num} mainitems={props.mainitems} items={items} num={num} image={props.image} urls={props.urls} iscreatebill={props.iscreatebill}/>
                ))}
            </div> 
        </div>
      );
}

export default Blocks;
