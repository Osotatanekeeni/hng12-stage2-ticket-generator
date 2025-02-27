/* eslint-disable tailwindcss/no-custom-classname */
import { useContext, useState } from "react";
import SectionColorImage from "../assets/Images/SectionColorImage.svg";
import { TicketifyContext } from "../Context";
import "../index.css";
import AttendeeDetails from "./AttendeeDetails";
function TicketSelection() {
  const {
    setNumberOfRegularTickets,
    setNumberOfVipTickets,
    setNumberOfVvipTickets,
    currentStep,
    setCurrentStep,
    totalRegularTickets,
    setTotalRegularTickets,
    totalVipTickets,
    setTotalVipTickets,
    totalVvipTickets,
    setTotalVvipTickets
  } = useContext(TicketifyContext);
  const [isRegularTicket, setIsRegularTicket] = useState(true);
  const [isVipTicket, setIsVipTicket] = useState(false);
  const [isVvipTicket, setIsVvipTicket] = useState(false);
  const [selectedTicketCount, setSelectedTicketCount] = useState(1);

  const handleRegularTicket = () => {
    setIsRegularTicket(true);
    setIsVipTicket(false);
    setIsVvipTicket(false);
  };

  const handleVipTicket = () => {
    setIsVipTicket(true);
    setIsRegularTicket(false);
    setIsVvipTicket(false);
  };

  const handleVvipTicket = () => {
    setIsVipTicket(false);
    setIsRegularTicket(false);
    setIsVvipTicket(true);
  };

  const getTicketOptions = () => {
    let maxTickets = 1;
    if (isRegularTicket) {
      maxTickets = totalRegularTickets;
    } else if (isVipTicket) {
      maxTickets = totalVipTickets;
    } else if (isVvipTicket) {
      maxTickets = totalVvipTickets;
    }
    return Array.from({ length: maxTickets }, (_, i) => i + 1);
  };

  const handleNext = () => {
    if (isRegularTicket) {
        setNumberOfRegularTickets(selectedTicketCount);
        setTotalRegularTickets(totalRegularTickets - selectedTicketCount)
        localStorage.setItem("ticketType", "REGULAR")
    };
    if (isVipTicket) {
        setNumberOfVipTickets(selectedTicketCount);
        setTotalVipTickets(totalVipTickets - selectedTicketCount)
        localStorage.setItem("ticketType", "VIP")
    };
    if (isVvipTicket) {
        setNumberOfVvipTickets(selectedTicketCount);
        setTotalVvipTickets(totalVvipTickets - selectedTicketCount)
        localStorage.setItem("ticketType", "VVIP")
    };

    localStorage.setItem("ticketCount", selectedTicketCount.toString());

    setCurrentStep(2);
  };

  if (currentStep === 2) {
    return <AttendeeDetails />;
  }
  return (
    <div className="flex w-full flex-col gap-10 rounded-3xl border border-borderColor  p-4 text-white lg:w-2/5 lg:p-12">
      <div>
        <div className="flex flex-col justify-between lg:flex-row">
          <p className="step-heading text-3xl font-light lg:text-4xl">Ticket Selection</p>
          <p>Step 1/3</p>
        </div>
        <div className="relative mt-4">
          <div className="absolute left-0 top-0 h-1 w-1/3 rounded-full bg-teal"></div>
          <div className="h-1 w-full rounded-full bg-borderColor"></div>
        </div>
      </div>

      <div className="flex h-full flex-col rounded-3xl border border-borderColor bg-container p-6">
        <div
          className="flex flex-col items-center gap-2 rounded-3xl border border-borderColor2 p-4 text-center"
          style={{
            backgroundImage: `url(${SectionColorImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-4xl lg:text-5xl" style={{ fontFamily: "Road Rage" }}>
            Techember Fest "25
          </h1>
          <p className="lg:w-5/6" style={{ fontFamily: "Roboto" }}>
            Join us for an unforgottable experience at Techember Fest! Secure
            your spot now
          </p>
          <div className="mt-5 flex flex-col gap-0 lg:mt-0 lg:flex-row lg:gap-6" style={{ fontFamily: "Roboto" }}>
            <p>📍04 Rumens road, Ikoyi, Lagos</p>
            <p className="hidden tracking-widest lg:block">| |</p>
            <p>March 15, 2025 | 7:00PM</p>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="absolute left-0 top-0 h-1 w-2/4 rounded-full bg-borderColor"></div>
          <div className="h-1 w-full rounded-full bg-borderColor"></div>
        </div>

        <div className="mb-2 mt-8 font-['Roboto'] text-base font-normal leading-normal text-neutral-50">
          Select Ticket Type:
        </div>
        <div className="inline-flex flex-col items-center justify-center gap-4 rounded-3xl border border-[#07363e] bg-[#042127] p-4">
          <div className="inline-flex flex-col items-start justify-between gap-6 self-stretch lg:flex-row">
            <div
              className={`inline-flex h-[110px] w-full flex-col  items-start justify-start gap-1 overflow-hidden rounded-xl border-2 border-accessColor hover:bg-[#2b545a] ${isRegularTicket ? "border border-accessColor bg-[#12464e]" : "border-2 border-accessColor bg-none"} cursor-pointer p-2`}
              onClick={handleRegularTicket}
            >
              <div className="font-['Roboto'] text-2xl font-semibold leading-relaxed text-white">
                Free
              </div>
              <div className="flex h-[45px] flex-col items-start justify-center self-stretch">
                <div className="whitespace-nowrap font-['Roboto'] text-base font-normal uppercase leading-normal text-neutral-50">
                  Regular Access
                </div>
                <div className="font-['Roboto'] text-sm font-normal leading-[21px] text-[#d9d9d9]">
                  {totalRegularTickets}
                </div>
              </div>
            </div>
            <div
              className={`inline-flex h-[110px] w-full flex-col  items-start justify-start gap-1 overflow-hidden rounded-xl border-2 border-accessColor hover:bg-[#2b545a] ${isVipTicket ? "border border-accessColor bg-[#12464e]" : "border-2 border-accessColor bg-none"} cursor-pointer p-2`}
              onClick={handleVipTicket}
            >
              <div className="font-['Roboto'] text-2xl font-semibold leading-relaxed text-white">
                $150
              </div>
              <div className="flex h-[45px] flex-col items-start justify-center self-stretch">
                <div className="font-['Roboto'] text-base font-normal uppercase leading-normal text-neutral-50">
                  VIP Access{" "}
                </div>
                <div className="font-['Roboto'] text-sm font-normal leading-[21px] text-[#d9d9d9]">
                  {totalVipTickets}
                </div>
              </div>
            </div>
            <div
              className={`inline-flex h-[110px] w-full flex-col items-start justify-start gap-1 overflow-hidden rounded-xl border-2 border-accessColor hover:bg-[#2b545a] ${isVvipTicket ? "border border-accessColor bg-[#12464e]" : "border-2 border-accessColor bg-none"} cursor-pointer p-2`}
              onClick={handleVvipTicket}
            >
              <div className="font-['Roboto'] text-2xl font-semibold leading-relaxed text-white">
                $150
              </div>
              <div className="flex h-[45px] flex-col items-start justify-center self-stretch">
                <div className="font-['Roboto'] text-base font-normal uppercase leading-normal text-neutral-50">
                  VVIP Access
                </div>
                <div className="font-['Roboto'] text-sm font-normal leading-[21px] text-[#d9d9d9]">
                  {totalVvipTickets}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-2">Number of Tickets</p>
          <select
            className="w-full rounded-xl border border-borderColor2 bg-container2 p-3"
            value={selectedTicketCount}
            onChange={(e) => setSelectedTicketCount(Number(e.target.value))}
          >
            {getTicketOptions().map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 inline-flex h-auto flex-col-reverse items-end justify-end gap-3 sm:flex-row sm:gap-6">
          <div className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#23a0b5] px-6 py-3">
            <button className="font-['JejuMyeongjo'] text-base font-normal leading-normal text-[#23a0b5]">
              Cancel
            </button>
          </div>
          <div className="flex h-12 w-full  cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#23a0b5] px-6 py-3" onClick={handleNext}>
            <button
              className="font-['JejuMyeongjo'] text-base font-normal leading-normal text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSelection;
