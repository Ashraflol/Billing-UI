import React, { useState } from 'react';
import Blocks from '../components/blocks';
import Billview from '../components/billview';
import { useSelector } from 'react-redux';

function Createbill() {
    const mainitems = useSelector((state) => state.bill.items);
    console.log(mainitems)
    return(
        <div className='container mt-4'>
            <div className='row mx-5'>
                <div className='col-md-8 col-sm-12'>
                    <Blocks mainitems={mainitems} image={'/tea.jpeg'} urls={'/createbill'} iscreatebill={true}/>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <Billview />
                </div>
            </div>
        </div>
      );
}

export default Createbill;
