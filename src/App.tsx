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
    <main className="bg-[#041e22]">
      <Navigation />
      <div className="flex items-center justify-center px-4 pt-10 sm:h-screen sm:pt-0">
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
