import {logs} from '../data/logs'

const Dashboard = () => {
    const sum=logs.reduce((acc,curr)=>{
        acc+=curr.carbon;
        return acc;
    },0);

  return (
    <div>
        <h1>Dashboard</h1>
        <p>Total carbon : {sum} kgs</p>
        <ul>
            {
                logs.map(d=>(
                    <li key={d.id}>
                        {d.activity}={d.carbon} kg
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Dashboard