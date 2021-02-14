import React ,{useContext}from 'react'
import {GlobalContext} from '../context/Globalstate'


const Balance = () => {
    const{transactions}=useContext(GlobalContext);
    const amounts =transactions.map(transactions=>transactions.amount);
    console.log(amounts);
    const total= amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
           <h4>Your Balance</h4> 
           <h1>${total}</h1>
        </div>
    )
}

export default Balance
