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
    
      <main className="flex h-screen items-center justify-center" style={{ backgroundImage: `url(${BackgroundColorImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        
      {step === 1 ? <TicketSelection /> : step === 2 ? <AttendeeDetails /> : step === 3 ? <TicketBooked /> : <TicketSelection />}
    </main>
    
  );
}

export default App;
