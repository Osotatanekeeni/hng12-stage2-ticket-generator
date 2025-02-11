/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react'
import { AiOutlineCloudDownload } from "react-icons/ai";
import { TicketifyContext } from '../Context';
import { SubmitHandler, useForm } from 'react-hook-form';
import TicketBooked from './TicketBooked';
// import TicketSelection from './TicketSelection';

interface FormInputs {
    attendeeName: string;
    attendeeEmail: string;
    about: string;
}

function AttendeeDetails() {
    const { imageUrl, setImageUrl, setAttendeeName, setAttendeeEmail, setAbout, currentStep, setCurrentStep } = useContext(TicketifyContext);
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
        }
    };

    const handleGetTicket: SubmitHandler<FormInputs> = (data) => {
        setAttendeeName(data.attendeeName);
        setAttendeeEmail(data.attendeeEmail);
        setAbout(data.about);
        setCurrentStep(3);
    }

    const handlePrevious = () => {
        setCurrentStep(2)
    }

    if (currentStep === 3) {
        console.log("This is the current step: ", currentStep);
        return <TicketBooked />
    } 

    return (
        <div className='flex w-2/5 flex-col gap-10 overflow-y-auto rounded-3xl border  border-borderColor p-12 text-white' style={{ height: "90vh"}}>
            <div>
            <div className='flex justify-between'>
                <p className='step-heading text-4xl font-light'>Attendee Details</p>
                <p>Step 2/3</p>
            </div>
            <div className='relative mt-4'>
                <div className='absolute left-0 top-0 h-1 w-2/4 rounded-full bg-teal'></div>
                <div className='h-1 w-full rounded-full bg-borderColor'></div>
            </div>
    
            </div>

            <div className='rounded-3xl border border-borderColor2 bg-container2 p-6'>
                <p className='mb-8'>Upload Profile Photo</p>
                <div className='flex justify-center rounded-xl bg-container3'>
                    <div className='relative flex w-1/3 flex-col items-center rounded-3xl bg-borderColor px-6 py-16 text-center'>
                    {!imageUrl ? 
                    (<>
                    <AiOutlineCloudDownload size={32} />
                    <p className='text-sm font-light' style={{ fontFamily: "Roboto"}}>Drag & drop or click to upload</p></>) : 
                    <img src={imageUrl} />}
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 cursor-pointer opacity-0"
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>
                {imageUrl && (
                    <div className='mt-4'>
                        <p className='mb-2'>Image Uploaded successfully</p>
                    </div>
                )}
            </div>

            <div className='relative mt-4'>
                <div className='absolute left-0 top-0 h-1 w-2/4 rounded-full bg-borderColor'></div>
                <div className='h-1 w-full rounded-full bg-borderColor'></div>
            </div>

            <form onSubmit={handleSubmit(handleGetTicket)} >
            <div className=''>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                    <label>Enter your name <sup>*</sup> </label>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('attendeeName', { required: 'Name is required' })}
                        onChange={(e) => setAttendeeName(e.target.value)}
                        className='rounded-xl border border-borderColor2 bg-transparent p-3 text-white'
                    />
                    {errors.attendeeName && <p className='text-red-500'>{errors.attendeeName.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label>Enter your email <sup>*</sup> </label>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('attendeeEmail', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                        onChange={(e) => setAttendeeEmail(e.target.value)}
                        className='rounded-xl border border-borderColor2 bg-transparent p-3 text-white'
                    />
                    {errors.attendeeEmail && <p className='text-red-500'>{errors.attendeeEmail.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label>About the project <sup>*</sup></label>
                    <textarea
                        placeholder="About the project"
                        {...register('about', { required: 'About the project is required' })}
                        onChange={(e) => setAbout(e.target.value)}
                        className='rounded-xl border border-borderColor2 bg-transparent p-3 text-white'
                        rows={4}
                    />
                    {errors.about && <p className='text-red-500'>{errors.about.message}</p>}
                    </div>
                </div>
            </div>

            <div className='mt-8 flex gap-4'>
                    <button type="button" className='px-22 w-1/2 rounded-xl border border-teal py-3 text-teal' onClick={handlePrevious}>Back</button>
                    <button type="submit" className='px-22 w-1/2 rounded-xl bg-teal py-3'>Get My Free Ticket</button>
            </div>
            </form>

        </div>
      )
}

export default AttendeeDetails