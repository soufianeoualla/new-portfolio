
import './App.css'
import Balance from './Components/Balance'
import Chart from './Components/Chart'

function App() {
  

  return (
    <>
      <div className="container">
        <Balance/>
        <div className="card">
          <h2>Spending - Last 7 days</h2>
          <Chart/>
          
        </div>
      </div>
    </>
  )
}

export default App
