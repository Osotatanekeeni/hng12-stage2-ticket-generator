import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketSelection from "./Components/TicketSelection";
import { TicketifyContext } from "./Context";
import BackgroundColorImage from "./assets/Images/BackgroundColorImage.svg"
import AttendeeDetails from "./Components/AttendeeDetails";
import TicketBooked from "./Components/TicketBooked";
import Navigation from "./Components/Navigation";
import About from "./Components/About";

function App() {
  const { currentStep } = useContext(TicketifyContext);
  const [step, setStep] = useState(currentStep);

  useEffect(() => {
    setStep(currentStep)
  }, [currentStep])

  const renderContent = () => {
    return step === 1 ? <TicketSelection /> : step === 2 ? <AttendeeDetails /> : step === 3 ? <TicketBooked /> : <TicketSelection />;
  };
  
  
  return (
    
    <Router>
    <main className="" style={{ backgroundImage: `url(${BackgroundColorImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navigation />
      <div className="flex sm:h-screen items-center justify-center pt-10 px-4 sm:pt-0">
        <Routes>
          <Route path="/" element={renderContent()} />
          <Route path="/tickets" element={renderContent()} />
          <Route path="/events" element={<TicketSelection />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </main>
  </Router>
    
  );
}

export default App;
