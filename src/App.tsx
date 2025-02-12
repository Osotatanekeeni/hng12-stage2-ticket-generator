import { useContext, useEffect, useState } from "react";
import TicketSelection from "./Components/TicketSelection";
import { TicketifyContext } from "./Context";
import BackgroundColorImage from "./assets/Images/BackgroundColorImage.svg"
import AttendeeDetails from "./Components/AttendeeDetails";
import TicketBooked from "./Components/TicketBooked";

function App() {
  const { currentStep } = useContext(TicketifyContext);
  const [step, setStep] = useState(currentStep);

  useEffect(() => {
    setStep(currentStep)
  }, [currentStep])
  
  
  return (
    
      <div className="flex sm:h-screen items-center justify-center pt-20 px-4 sm:pt-0" style={{ backgroundImage: `url(${BackgroundColorImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        
      {step === 1 ? <TicketSelection /> : step === 2 ? <AttendeeDetails /> : step === 3 ? <TicketBooked /> : <TicketSelection />}
    </div>
    
  );
}

export default App;
