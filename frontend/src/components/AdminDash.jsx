import React from "react";
import tick from "../assets/tick.png";
import cross from '../assets/cross.png';
import message from '../assets/message.png';
import notification from '../assets/notification.png';
import Tables from "./Tables";

const AdminDash = () => {
  return (
    <div>
      {/* Admin Dashboard */}
      <div className="ml-13 w-full p-6">
        {/* Header Row: Title + Notification */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl text-[#9a5b02]">Admin-Dashboard</h2>
          <img
            src={notification}
            width={40}
            alt="notification"
            className="cursor-pointer"
          />
        </div>

        {/* Cards Container */}
        <div className="flex flex-nowrap gap-6 overflow-x-auto mb-8">
          {/* Card 1 */}
          <div className="cursor-pointer w-60 flex items-center rounded-md bg-[#003566] p-4 text-white shadow-md">
            <img src={tick} width={35} alt="tick" className="mr-4" />
            <div className="flex flex-col">
              <p className="text-sm">Total found reports</p>
              <p className="text-lg font-semibold">105</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cursor-pointer w-60 flex items-center rounded-md bg-[#003566] p-4 text-white shadow-md">
            <img src={cross} width={32} alt="cross" className="mr-4" />
            <div className="flex flex-col">
              <p className="text-sm">Total Lost reports</p>
              <p className="text-lg font-semibold">105</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cursor-pointer w-60 flex items-center rounded-md bg-[#003566] p-4 text-white shadow-md">
            <img src={tick} width={35} alt="tick" className="mr-4" />
            <div className="flex flex-col">
              <p className="text-sm">Matched & Returned Items</p>
              <p className="text-lg font-semibold">105</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="cursor-pointer w-60 flex items-center rounded-md bg-[#003566] p-4 text-white shadow-md">
            <img src={message} width={35} alt="message" className="mr-4" />
            <div className="flex flex-col">
              <p className="text-sm">Reports Today</p>
              <p className="text-lg font-semibold">105</p>
            </div>
          </div>
        </div>

        <Tables />
      </div>
    </div>
  );
};

export default AdminDash;