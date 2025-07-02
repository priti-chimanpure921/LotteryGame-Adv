
import './App.css';
import Lottery from './Lottery.jsx';
import {sum} from './helper.js';

function App() {
  let winCondition = (ticket)=>{
    return sum(ticket) === 15 ; 
    // return ticket.every((num)=> num === ticket[0]);
  }

  return (
    <>
      <div>
        <Lottery n={3} winningSum={15} winCondition={winCondition}/>
      </div>
      
    </>
  )
}

export default App;
