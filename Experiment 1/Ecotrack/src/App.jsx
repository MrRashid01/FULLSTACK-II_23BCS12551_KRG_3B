import Header from "./components/Header";
import Dashboard from "./pages/Dashboard"; 
import Logs from "./pages/Logs";

const App = () =>{
return(
  <>
    <Header title = "Ecotrack - Experiment 1"/>
    <main style = {{padding: "1rem"}}>
      <Dashboard/>
      <Logs/>
    </main>
  </>
)

}

export default App;