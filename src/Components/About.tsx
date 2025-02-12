
function About() {
  return (
    <div className="w-1/4 rounded-2xl border border-borderColor p-4 ">
        <div>
            <div className="text-white">
                <p>Event Ticket Booking UI – Open Source Practice Project 🎟️ </p>
                <p>Overview</p>
                <p>This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, explore, and build upon. The design
          focuses on a seamless, login-free ticket reservation flow, allowing
          users to book event tickets quickly and efficiently.</p>
          <p>The project
          consists of a three-step ticket booking flow, and developers can
          extend it further by integrating payment solutions, user
          authentication (optional), and ticket validation systems.</p>

          <p>Flow &
          Features</p>

          <ol>
            <li>1️⃣ Ticket Selection</li>
            <ul>
                <li>• Users can browse available tickets (Free & Paid) </li>
                <li>• Ticket options are displayed in a list or card view.</li>
                <li>• For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
                details.</li>
                <li>• For Paid Tickets → Clicking “Purchase Ticket” would ideally
                open a payment modal.</li>
            </ul>
          </ol>

          <ol>
            <li>2️⃣ Attendee Details Form</li>
            <ul>
                <li>• Users input their
          Name, Email, and optional Phone Number </li>
                <li>• Profile picture upload
                option with preview functionality.</li>
                <li>• Ticket summary is visible to
                ensure users review their details before submission</li>
            </ul>
          </ol>
            </div>
        </div>

      {/* Buttons */}
      <div className="mt-8 inline-flex h-auto w-full flex-col-reverse items-end justify-end gap-3 sm:flex-row sm:gap-6">
        <div className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#23a0b5] px-6 py-3">
          <button className="font-['JejuMyeongjo'] text-base font-normal leading-normal text-[#23a0b5]">
            Design File
          </button>
        </div>
        <div className="flex h-12 w-full  cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#23a0b5] px-6 py-3">
          <button className="font-['JejuMyeongjo'] text-base font-normal leading-normal text-neutral-50">
            Github Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
