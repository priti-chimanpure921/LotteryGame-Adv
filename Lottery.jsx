import { useState } from "react";
import './Lottery.css';
import './helper.js';
import { genTicket,sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";

function Lottery({n,winCondition})
{
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    
    let buyTicket = ()=>{
        setTicket(genTicket(n));
    };

    return(
        <div>
            <h1>Lottery Game !</h1>
            <h3>Ticket</h3>
            <Ticket ticket={ticket}/>
            <Button action={buyTicket}/>
            
            <h2>{isWinning && "Congratulations !!! You won."}</h2>

        </div>
    );
}
export default Lottery;