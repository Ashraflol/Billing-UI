import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function Billview() {
    const mainitems = useSelector((state) => state.bill.items);
    let count = 0;
    let totalamount = 0
    let totalquantity = 0
    return(
        <div>
            <h3>Invoice</h3>
            <div className='container mt-3'>
                <div className='row' key='0'>
                    <div className='col-3'>Count</div>
                    <div className='col-3'>Name</div>
                    <div className='col-3'>Quantity</div>
                    <div className='col-3'>Price</div>
                </div>
                {
                mainitems.map((items,num)=> {
                    
                    if(items.quantity!=0) {
                        count++
                        totalamount += items.price*items.quantity
                        totalquantity += items.quantity
                        return(
                            <div className='row' key={num}>
                                <div className='col-3'>{count}</div>
                                <div className='col-3'>{items.name}</div>
                                <div className='col-3'>{items.quantity}</div>
                                <div className='col-3'>{items.price*items.quantity}</div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='container mt-4'>
                <div className='row' >
                    <div className='col-6'>Total Count</div>
                    <div className='col-6'>{totalquantity}</div>
                </div>
                <div className='row' >
                    <div className='col-6'>Total Price</div>
                    <div className='col-6'>{totalamount}/-</div>
                </div>
            </div>
        </div>
      );
}


export default Billview;
