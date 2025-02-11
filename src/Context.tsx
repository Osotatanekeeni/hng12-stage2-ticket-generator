import React, { createContext, useState, ReactNode } from 'react';

interface TicketifyContextProps {
  numberOfRegularTickets: number;
  setNumberOfRegularTickets: (number: number) => void;
  numberOfVipTickets: number;
  setNumberOfVipTickets: (number: number) => void;
  numberOfVvipTickets: number;
  setNumberOfVvipTickets: (number: number) => void;
}

export const TicketifyContext = createContext<TicketifyContextProps | undefined>(undefined);

export const TicketifyProvider = ({ children }: { children: ReactNode }) => {
    const [numberOfRegularTickets, setNumberOfRegularTickets] = useState(20);
    const [numberOfVipTickets, setNumberOfVipTickets] = useState(20);
    const [numberOfVvipTickets, setNumberOfVvipTickets] = useState(20);

  return (
    <TicketifyContext.Provider value={{ 
        numberOfRegularTickets, 
        setNumberOfRegularTickets, 
        numberOfVipTickets, 
        setNumberOfVipTickets, 
        numberOfVvipTickets, 
        setNumberOfVvipTickets 
      }}>
        {children}
      </TicketifyContext.Provider>
  );
};