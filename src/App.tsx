import TicketSelection from "./Components/TicketSelection";
import { TicketifyProvider } from "./Context";
import BackgroundColorImage from "./assets/Images/BackgroundColorImage.svg"

function App() {
  
  return (
    <TicketifyProvider>
      <main className="flex h-screen items-center justify-center" style={{ backgroundImage: `url(${BackgroundColorImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <TicketSelection />
    </main>
    </TicketifyProvider>
  );
}

export default App;
