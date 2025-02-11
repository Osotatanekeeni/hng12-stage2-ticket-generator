import React, { createContext, useState, ReactNode, useEffect } from 'react';

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
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalRegularTickets: number;
  setTotalRegularTickets: (number: number) => void;
  totalVipTickets: number;
  setTotalVipTickets: (number: number) => void;
  totalVvipTickets: number;
  setTotalVvipTickets: (number: number) => void;
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
  setAbout: () => {},
  currentStep: 1,
  setCurrentStep: () => {},
  totalRegularTickets: 20,
  setTotalRegularTickets: () => {},
  totalVipTickets: 20,
  setTotalVipTickets:  () => {},
  totalVvipTickets: 20,
  setTotalVvipTickets:  () => {},
  

});

export const TicketifyProvider = ({ children }: { children: ReactNode }) => {
    const [numberOfRegularTickets, setNumberOfRegularTickets] = useState(0);
    const [numberOfVipTickets, setNumberOfVipTickets] = useState(0);
    const [numberOfVvipTickets, setNumberOfVvipTickets] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [attendeeName, setAttendeeName] = useState("");
    const [attendeeEmail, setAttendeeEmail] = useState("");
    const [about, setAbout] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [totalRegularTickets, setTotalRegularTickets] = useState(20);
    const [totalVipTickets, setTotalVipTickets] = useState(20);
    const [totalVvipTickets, setTotalVvipTickets] = useState(20);


    useEffect(() => {
        localStorage.setItem('imageUrl', imageUrl);
      }, [imageUrl]);
    
      useEffect(() => {
        localStorage.setItem('attendeeName', attendeeName);
      }, [attendeeName]);
    
      useEffect(() => {
        localStorage.setItem('attendeeEmail', attendeeEmail);
      }, [attendeeEmail]);
    
      useEffect(() => {
        localStorage.setItem('about', about);
      }, [about]);
    
      useEffect(() => {
        localStorage.setItem('currentStep', currentStep.toString());
      }, [currentStep]);

      useEffect(() => {
        localStorage.setItem('totalRegularTickets', totalRegularTickets.toString());
      }, [totalRegularTickets]);

      useEffect(() => {
        localStorage.setItem('totalVipTickets', totalVipTickets.toString());
      }, [totalVipTickets]);

      useEffect(() => {
        localStorage.setItem('totalVvipTickets', totalVvipTickets.toString());
      }, [totalVvipTickets]);

      useEffect(() => {
        localStorage.setItem('numberOfRegularTickets', numberOfRegularTickets.toString());
      }, [numberOfRegularTickets]);

      useEffect(() => {
        localStorage.setItem('numberOfVipTickets', numberOfVipTickets.toString());
      }, [numberOfVipTickets]);

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
        setAbout,
        currentStep,
        setCurrentStep,
        totalRegularTickets,
        setTotalRegularTickets,
        totalVipTickets,
        setTotalVipTickets,
        totalVvipTickets,
        setTotalVvipTickets
      }}>
        {children}
      </TicketifyContext.Provider>
  );
};