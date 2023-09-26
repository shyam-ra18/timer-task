
import DetailCard from './components/DetailCard'
import Navigation from './components/Navigation'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <Navigation />
      <Timer />
      <DetailCard status="ACCEPTED" time="43 Mins" />
      <DetailCard status="ACCEPTED" time="75 Mins" />
      <DetailCard status="ACCEPT JOB" label="DECLINE JOB" />
    </>
  )
}

export default App
