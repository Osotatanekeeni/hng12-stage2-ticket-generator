import React, { createContext, useState, ReactNode } from 'react';

interface TicketifyContextProps {
  numberOfRegularTickets: number;
  setNumberOfRegularTickets: (number: number) => void;
  numberOfVipTickets: number;
  setNumberOfVipTickets: (number: number) => void;
  numberOfVvipTickets: number;
  setNumberOfVvipTickets: (number: number) => void;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  attendeeName: string;
  setAttendeeName: (name: string) => void;
  attendeeEmail: string;
  setAttendeeEmail: (email: string) => void;
  about: string;
  setAbout: (about: string) => void;
}

export const TicketifyContext = createContext<TicketifyContextProps>({
  numberOfRegularTickets: 0,
  setNumberOfRegularTickets: () => {},
  numberOfVipTickets: 0,
  setNumberOfVipTickets: () => {},
  numberOfVvipTickets: 0,
  setNumberOfVvipTickets: () => {},
  imageUrl: "",
  setImageUrl: () => {},
  attendeeName: "",
  setAttendeeName: () => {},
  attendeeEmail: "",
  setAttendeeEmail: () => {},
  about: "",
  setAbout: () => {}
});

export const TicketifyProvider = ({ children }: { children: ReactNode }) => {
    const [numberOfRegularTickets, setNumberOfRegularTickets] = useState(20);
    const [numberOfVipTickets, setNumberOfVipTickets] = useState(20);
    const [numberOfVvipTickets, setNumberOfVvipTickets] = useState(20);
    const [imageUrl, setImageUrl] = useState("");
    const [attendeeName, setAttendeeName] = useState("");
    const [attendeeEmail, setAttendeeEmail] = useState("");
    const [about, setAbout] = useState("");

  return (
    <TicketifyContext.Provider value={{ 
        numberOfRegularTickets, 
        setNumberOfRegularTickets, 
        numberOfVipTickets, 
        setNumberOfVipTickets, 
        numberOfVvipTickets, 
        setNumberOfVvipTickets,
        imageUrl,
        setImageUrl,
        attendeeName,
        setAttendeeName,
        attendeeEmail,
        setAttendeeEmail,
        about,
        setAbout
      }}>
        {children}
      </TicketifyContext.Provider>
  );
};