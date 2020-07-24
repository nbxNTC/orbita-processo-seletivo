import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const BillCard = ({item}) => {
  return (
    <div className='card-content'>
      <div className="top">
        <div className="left">
          <span>
            Fatura
          </span>
          <span>
            {item.date}
          </span>
        </div>
        <div 
          className={
            item.status === 'Em Atraso' ? 
            'status red' : 
            'status green'
          }
        >
          {item.status}
        </div>
      </div>
      <div className="values">
        <div className="consumed">
          <span>
          {Intl.NumberFormat(
            'pt-BR', 
          ).format(item.consumed)}
          </span>
          <span>
            MB
          </span>
        </div>
        <div className="cost">
          <span>
            R$
          </span>
          <span>
          {Intl.NumberFormat(
            'pt-BR', 
          ).format(item.cost)}            
          </span>          
        </div>        
      </div>
      <div className="due-date">
          <span>
            VENCIMENTO
          </span>
          <div className="date">
            <span>
              {item.duedate}
            </span>
            <span>
              {item.day}
            </span>
          </div>
        </div>
      <div className="bottom">
        <Link className="pay-link" to="/">          
          EFETUAR PAGAMENTO
        </Link>
      </div>
    </div>
  );  
}

export default BillCard;