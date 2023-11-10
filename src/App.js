import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Myheader from './Components/Myheader';
import Main from './Components/Main';
import Let from './Components/Let';
import How from './Components/How';
import Pricing from './Components/Pricing';
import Download from './Components/Download';
import Testonomicals from './Components/Testonomicals';
import Myfooter from './Components/Myfooter';
import Myfaq from './Components/Myfaq';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect} from 'react';

function App() {
  useEffect (() => {
    Aos.init({duration:1500,});
  }, [])
  return (
    <div>
      <Myheader/>
      <Main/>
      <Let/>
      <How/>
      <Pricing/>
      <Download/>
      <Testonomicals/>
      <Myfaq/>
      <Myfooter/>
    </div>
  );
}

export default App;
