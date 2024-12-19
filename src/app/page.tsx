import React from "react";
import { Button } from "@/components/ui/button";
import SettingsIcon from "@mui/icons-material/Settings";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";
import "./globals.css";

const HomePage: React.FC = () => {
  return (
    <div className="h-screen bg-[#2A2D35] text-white flex flex-col">
      <div className="mx-4 my-2 h-screen">
        {/* Header */}
        <div className="bg-[#0E1318] items-center justify-center rounded-[5px] py-4 flex relative h-[1/12]">
          <h2 className="text-2xl font-bold">PROJECT NAME</h2>
          <div className="font-semibold flex absolute right-0 mr-8 space-x-4">
            <SettingsIcon className="w-5" />
            <BedtimeOutlinedIcon className="w-5" />
          </div>
        </div>

        {/* Main */}
        <div className="h-[58%] w-full flex">
          {/* Webcam */}
          <div className="bg-[#A9ADB1] h-full w-[58%] rounded-[5px] mt-2 flex flex-col items-center justify-center">
            <NoPhotographyOutlinedIcon className="size-[100px] mb-4" />
            <p>Camera not connecting</p>
          </div>
          {/* Session and your pic */}
          <div className="h-full w-[42%] ml-2 mt-2">
              {/* Btn Session */}
            <div className="h-[40%] bg-[#0E1318] rounded-[5px] p-2">
              <h2 className="font-bold text-xl text-center">
                Session Commands
              </h2>
              <div className="flex mt-6 space-x-20 justify-center">
                <div className="flex flex-col space-y-4">
                  <Button className="btn-primary">Start Session</Button>
                  <Button className="btn-primary">End Session</Button>
                  <Button className="btn-primary">Capture Image</Button>
                </div>
                <div className="flex flex-col space-y-4">
                  <Button className="btn-primary">Choose Image</Button>
                  <Button className="btn-primary">Upload and Analyze</Button>
                  <Button className="btn-primary">Exit</Button>
                </div>
              </div>
            </div>

            <div className="h-[59%] bg-[#0E1318] rounded-[5px] p-2 mt-[6px] relative">
              <h3 className="font-medium text-xl text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                Your photo is here
              </h3>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="h-[33%] w-full flex mt-2">
          {/* Result and session */}
          <div className="h-full w-[58%] flex flex-col">
            <div className="bg-[#0E1318] h-[80%] rounded-[5px] mt-2 p-4">
                <h2 className="font-bold text-xl">Result</h2>
                <div className=" h-[1px] w-full bg-[#A9ADB1] mt-2">
                  {/* Result */}
                </div>
            </div>
            <div className="bg-[#0E1318] h-[20%] rounded-[5px] mt-2 px-4">
              <p>Current session:</p>
              <p>Selected session:</p>
            </div>
          </div>

          {/* session last */}
          <div className="w-[42%] bg-[#A9ADB1] rounded-[5px] mt-2 ml-2">

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
