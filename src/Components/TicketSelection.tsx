import React, { useContext, useState } from 'react'
import SectionColorImage from "../assets/Images/SectionColorImage.svg";
import { TicketifyContext } from '../Context';
import '../index.css';
function TicketSelection() {
    const { numberOfRegularTickets, setNumberOfRegularTickets, numberOfVipTickets, setNumberOfVipTickets, numberOfVvipTickets, setNumberOfVvipTickets} = useContext(TicketifyContext);
    const [isRegularTicket, setIsRegularTicket] = useState(true);
    const [isVipTicket, setIsVipTicket] = useState(false);
    const [isVvipTicket, setIsVvipTicket] = useState(false);
    const [selectedTicketCount, setSelectedTicketCount] = useState(1);

    const handleRegularTicket = () => {
        setIsRegularTicket(true);
        setIsVipTicket(false);
        setIsVvipTicket(false);

    }

    const handleVipTicket = () => {
        setIsVipTicket(true);
        setIsRegularTicket(false);
        setIsVvipTicket(false)
    }

    const handleVvipTicket = () => {
        setIsVipTicket(false);
        setIsRegularTicket(false);
        setIsVvipTicket(true)
    }

    const getTicketOptions = () => {
        let maxTickets = 1;
        if (isRegularTicket) {
            maxTickets = numberOfRegularTickets;
        } else if (isVipTicket) {
            maxTickets = numberOfVipTickets;
        } else if (isVvipTicket) {
            maxTickets = numberOfVvipTickets;
        }
        return Array.from({ length: maxTickets }, (_, i) => i + 1);
    }
  return (
    <div className='flex w-2/5 flex-col gap-10 rounded-3xl border  border-borderColor p-12 text-white'>
        <div>
        <div className='flex justify-between'>
            <p className='step-heading text-4xl font-light'>Ticket Selection</p>
            <p>Step 1/3</p>
        </div>
        <div className='relative mt-4'>
            <div className='absolute left-0 top-0 h-1 w-2/4 rounded-full bg-teal'></div>
            <div className='h-1 w-full rounded-full bg-borderColor'></div>
        </div>

        </div>

        <div className='flex h-full flex-col rounded-3xl border border-borderColor bg-container p-6'>
            <div className='flex flex-col items-center gap-2 rounded-3xl border border-borderColor2 p-4 text-center' style={{ backgroundImage: `url(${SectionColorImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h1 className='text-5xl' style={{ fontFamily: "Road Rage"}}>Techember Fest "25</h1>
                <p className='w-5/6' style={{ fontFamily: "Roboto" }}>Join us for an unforgottable experience at Techember Fest! Secure your spot now</p>
                <div className='flex gap-6' style={{ fontFamily: "Roboto" }}>
                    <p>📍Silicon Delta</p>
                    <p className='tracking-widest'>||</p>
                    <p>March 15, 2025 | 7:00PM</p>
                </div>
            </div>

            <div className='relative mt-4'>
                <div className='absolute left-0 top-0 h-1 w-2/4 rounded-full bg-borderColor'></div>
                <div className='h-1 w-full rounded-full bg-borderColor'></div>
            </div>

            {/* Ticket Type Section */}
            <div className='mt-8'>
                <p className='mb-2'>Select Ticket Type:</p>
            <div className='grid grid-cols-2 gap-6 rounded-3xl bg-container2 p-4'>
                {/* Regular Access */}
                <div className={`w-60 border-2 border-borderColor2  ${isRegularTicket ? "border-accessColor bg-accessColor" : "border-2 border-borderColor2 bg-none"}  flex cursor-pointer justify-between gap-2 rounded-xl p-2`} onClick={handleRegularTicket} style={{ fontFamily: "Roboto"}}>
                    <div className='flex flex-col gap-1'>
                        <p className='whitespace-nowrap'>REGULAR ACCESS</p>
                        <p className='text-sm font-light'>{numberOfRegularTickets} left!</p>
                    </div>
                    <div className='flex w-auto items-center rounded-lg border border-strokeColor bg-borderColor p-2 pl-8  text-right font-semibold' >
                        <p>Free</p>
                    </div>
                </div>




                {/* Vip Access */}
                <div className={`w-60 border-2 border-borderColor2 ${isVipTicket ? "border-accessColor bg-accessColor" : "border-2 border-borderColor2 bg-none"}  flex cursor-pointer justify-between gap-2 rounded-xl p-2`} onClick={handleVipTicket} style={{ fontFamily: "Roboto"}}>
                    <div className='flex flex-col gap-1'>
                        <p className='whitespace-nowrap'>VIP ACCESS</p>
                        <p className='text-sm font-light'>{numberOfVipTickets} left!</p>
                    </div>
                    <div className='flex w-auto items-center rounded-lg border border-strokeColor bg-borderColor p-2 pl-8   text-right font-semibold' >
                        <p>$50</p>
                    </div>
                </div>

                {/* Vvip Access */}
                <div className={`w-60 border-2 border-borderColor2 ${isVvipTicket ? "border-accessColor bg-accessColor" : "border-2 border-borderColor2 bg-none"}  flex cursor-pointer justify-between gap-2 rounded-xl p-2`} onClick={handleVvipTicket} style={{ fontFamily: "Roboto"}}>
                    <div className='flex flex-col gap-1'>
                        <p className='whitespace-nowrap'>VVIP ACCESS</p>
                        <p className='text-sm font-light'>{numberOfVvipTickets} left!</p>
                    </div>
                    <div className='flex w-auto items-center rounded-lg border border-strokeColor bg-borderColor p-2 pl-8  text-right font-semibold' >
                        <p>$150</p>
                    </div>
                </div>

                </div>
            </div>

            <div className='mt-8'>
            <p className='mb-2'>Number of Tickets</p>
            <select className='w-full rounded-xl border border-borderColor2 bg-container2 p-3' value={selectedTicketCount} onChange={(e) => setSelectedTicketCount(Number(e.target.value))}>
                        {getTicketOptions().map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
            </div>

            <div className='mt-8 flex gap-8 rounded-3xl border border-borderColor2 px-12'>
                    <button className='px-22.5 w-1/2 rounded-xl border border-teal py-3 text-teal'>Cancel</button>
                    <button className='px-22.5 w-1/2 rounded-xl bg-teal py-3'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default TicketSelection