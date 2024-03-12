import React, { useState } from 'react';
import Blocks from '../components/blocks';

function Home() {
    const [mainitems , setmainitems] = useState(['New Bill','New Item Entry','Items List','Todays Sale','Months Sale'])
    return(
        <Blocks mainitems={mainitems} image={'/logo.png'} urls={'/createbill'} iscreatebill={false}/>
      );
}

export default Home;
