import React, { useContext } from 'react'
import Ticket from "../assets/Images/Ticket.svg";
import { TicketifyContext } from '../Context';

function TicketBooked() {
    const { attendeeName, imageUrl, currentStep, setCurrentStep } = useContext(TicketifyContext);
    console.log("Image url: " + localStorage.getItem('imageUrl'));
  return (
    <div className='flex w-2/5 flex-col gap-10 overflow-y-auto rounded-3xl border  border-borderColor p-12 text-white' style={{ height: "90vh"}}>
                <div>
                <div className='flex justify-between'>
                    <p className='step-heading text-4xl font-light'>Ready</p>
                    <p>Step 3/3</p>
                </div>
                <div className='relative mt-4'>
                    <div className='absolute left-0 top-0 h-1 w-2/4 rounded-full bg-teal'></div>
                    <div className='h-1 w-full rounded-full bg-borderColor'></div>
                </div>
        
                </div>
    
                <div>
                    <h1>Your Ticket is Booked</h1>
                    <p>You can download or check your email for a copy</p>
                </div>

                <div className=' h-60 w-full border-4 border-container' style={{ backgroundImage: `url(${Ticket})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    {/* The image */}
                    <div className=''> 
                    {/* {imageUrl && <img src={imageUrl} alt="Uploaded" className='rounded-xl size-80' />} */}
                    </div>

                    {/* Ticket Details */}
                    <div>

                    </div>
                </div>
    
            </div>
  )
}

export default TicketBooked