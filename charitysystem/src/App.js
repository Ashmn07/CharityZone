import { useEffect } from 'react';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';

function App() {

  useEffect(()=>{
    console.log("App initialized")
  },[])

  return (
    <div>
      <Navbar/>
      <Banner/>
    </div>
  );
}

export default App;
