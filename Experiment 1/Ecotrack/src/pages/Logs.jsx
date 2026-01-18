import { logs } from "../data/logs";

const Logs = () => {
    const highCarbon = logs.filter(
        log => log.carbon >= 4
    );
    const lowCarbon = logs.filter(
        log=>log.carbon < 4 
    );

    return (
        <div>
            <h2>Daily Logs</h2>
            <ul>
                <h3>High Carbon:</h3>
                {highCarbon.map(log => (
                    <li key={log.id} style={{color:"red"}}>
                        {log.activity} = {log.carbon} Kg
                    </li>
                ))}
            </ul>
            <ul >
                <h3>Low Carbon:</h3>
                {lowCarbon.map(log => (
                    <li key={log.id} style={{color:"green"}}>
                        {log.activity} = {log.carbon} Kg
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Logs;
