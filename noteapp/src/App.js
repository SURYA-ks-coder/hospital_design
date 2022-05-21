import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Appointment from './Components/Main/Appointment/Appointment';
import Slider from './Components/Main/Carousel/Slider';
import OnlineDoctor from './Components/Main/Online_Doctor/OnlineDoctor';
import Cards from './Components/Main/Our_Services/cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Cards/>
      <Appointment/>
      <OnlineDoctor/>
      <Footer/>
    </div>
  );
}

export default App;
