import React from 'react';

import './styles.css';

import BillCard from '../BillCard';

const items = [
  {
    id: 0,
    date: 'JAN 10',
    status: 'Em Atraso',
    consumed: 22377,
    cost: 431.19,
    duedate: '10/01',
    day: 'Segunda'
  },
  {
    id: 1,
    date: 'DEZ 20',
    status: 'Em Atras',
    consumed: 2377,
    cost: 41.19,
    duedate: '05/01',
    day: 'Domingo'
  },
  {
    id: 2,
    date: 'FEV 25',
    status: 'Em Atraso',
    consumed: 377,
    cost: 4.19,
    duedate: '15/02',
    day: 'Quarta'
  },
  {
    id: 3,
    date: 'DEZ 20',
    status: 'Em Atraso',
    consumed: 2377,
    cost: 41.19,
    duedate: '05/01',
    day: 'Domingo'
  },
]

const BillList = () => {
  return (
    <div className="list">
      {items.map (item => (
        <BillCard 
          key={item.id} 
          item={item}
          className='item'
        />
      ))}      
    </div>
  );  
}

export default BillList;