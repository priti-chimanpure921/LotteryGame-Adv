import TicketNum from "./TicketNum";

function Ticket({ticket})
{
    return(
        <div>
            <p>Ticket</p>
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}  
        </div>
    );
}
export default Ticket;