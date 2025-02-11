/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from "react";
import { TicketifyContext } from "../Context";
import { SubmitHandler, useForm } from "react-hook-form";
import TicketBooked from "./TicketBooked";
import TicketSelection from "./TicketSelection";
// import TicketSelection from './TicketSelection';

interface FormInputs {
  attendeeName: string;
  attendeeEmail: string;
  request: string;
}

function AttendeeDetails() {
  const {
    imageUrl,
    setImageUrl,
    setAttendeeName,
    setAttendeeEmail,
    setRequest,
    currentStep,
    setCurrentStep,
  } = useContext(TicketifyContext);

  const image = localStorage.getItem("imageUrl");
  const name = localStorage.getItem("attendeeName");
  const email = localStorage.getItem("attendeeEmail");
  const request = localStorage.getItem("request");
  //   useEffect(() => {

  //   }, [setImageUrl])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      localStorage.setItem("imageUrl", url);
      setImageUrl(url);
    }
  };

  const handleGetTicket: SubmitHandler<FormInputs> = (data) => {
    setAttendeeName(data.attendeeName);
    setAttendeeEmail(data.attendeeEmail);
    setRequest(data.request);

    localStorage.setItem("attendeeName", data.attendeeName);
    localStorage.setItem("attendeeEmail", data.attendeeEmail);
    localStorage.setItem("request", data.request);
    setCurrentStep(3);
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  if (currentStep === 1) {
    return <TicketSelection />;
  }

  if (currentStep === 3) {
    console.log("This is the current step: ", currentStep);
    return <TicketBooked />;
  }

  return (
    <div
      className="flex w-2/5 flex-col gap-10 overflow-y-auto rounded-3xl border  border-borderColor p-12 text-white"
      style={{ height: "90vh" }}
    >
      <div>
        <div className="flex justify-between">
          <p className="step-heading text-4xl font-light">Attendee Details</p>
          <p>Step 2/3</p>
        </div>
        <div className="relative mt-4">
          <div className="absolute left-0 top-0 h-1 w-2/4 rounded-full bg-teal"></div>
          <div className="h-1 w-full rounded-full bg-borderColor"></div>
        </div>
      </div>

      <div className="inline-flex h-[328px] w-[556px] flex-col items-start justify-start gap-8 rounded-3xl border border-[#07363e] bg-[#042127] px-6 pb-12 pt-6">
        <div className="text-center font-['Roboto'] text-base font-normal leading-normal text-neutral-50">
          Upload Profile Photo
        </div>
        <div className="inline-flex h-[200px] items-center justify-center gap-2.5 self-stretch bg-black/20">
          <div className="relative inline-flex size-60 flex-col items-center justify-center gap-4 rounded-[32px] border-4 border-[#23a0b5]/50 bg-[#0e464e] p-6">
            {!image ? (
              <>
                <div data-svg-wrapper className="relative">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </div>
                <div className="self-stretch text-center font-['Roboto'] text-base font-normal leading-normal text-neutral-50">
                  Drag & drop or click to upload
                </div>
              </>
            ) : (
              <img className="size-60" src={imageUrl} />
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 cursor-pointer opacity-0"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="absolute left-0 top-0 h-1 w-2/4 rounded-full bg-borderColor"></div>
        <div className="h-1 w-full rounded-full bg-borderColor"></div>
      </div>

      <form onSubmit={handleSubmit(handleGetTicket)}>
        <div className="">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label>
                Enter your name <sup>*</sup>{" "}
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={name ? name : ""}
                {...register("attendeeName", { required: "Name is required" })}
                onChange={(e) => setAttendeeName(e.target.value)}
                className="rounded-xl border border-borderColor2 bg-transparent p-3 text-white"
              />
              {errors.attendeeName && (
                <p className="text-red-500">{errors.attendeeName.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>
                Enter your email <sup>*</sup>{" "}
              </label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={email ? email : ""}
                {...register("attendeeEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                onChange={(e) => setAttendeeEmail(e.target.value)}
                className="rounded-xl border border-borderColor2 bg-transparent p-3 text-white"
              />
              {errors.attendeeEmail && (
                <p className="text-red-500">{errors.attendeeEmail.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>
                Special Request <sup>*</sup>
              </label>
              <textarea
                placeholder="Special Request"
                defaultValue={request ? request : ""}
                {...register("request", {
                  required: "Special Request is required",
                })}
                onChange={(e) => setRequest(e.target.value)}
                className="rounded-xl border border-borderColor2 bg-transparent p-3 text-white"
                rows={4}
              />
              {errors.request && (
                <p className="text-red-500">{errors.request.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            type="button"
            className="px-22 w-1/2 rounded-xl border border-teal py-3 text-teal"
            onClick={handlePrevious}
          >
            Back
          </button>
          <button type="submit" className="px-22 w-1/2 rounded-xl bg-teal py-3">
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
}

export default AttendeeDetails;
