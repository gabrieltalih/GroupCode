import { useState } from "react";
import SidebarSection from "./SidebarSection";
import { House, Settings, CircleUserRound, Power } from "lucide-react";
import Profile from "./Profile";
import dummyUser from "../data/userData";

const Sidebar = () => {
  const [profile, setProfile] = useState(false);

  const onProfileOpen = () => {
    setProfile(true);
  };

  const onProfileClose = () => {
    setProfile(false);
  };

  const onProfileSave = () => {
    alert("Will add saving later 😪");
    setProfile(false);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className=" relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <h5 className="roboto-regular block antialiased tracking-normal text-xl font-semibold leading-snug text-gray-900">
              GroupCode
            </h5>
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 text-base  text-gray-700">
            <SidebarSection sectionName="Home">
              <House
                className="h-5 w-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </SidebarSection>
            <SidebarSection sectionName="Settings ">
              <Settings
                className="h-5 w-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </SidebarSection>
            <SidebarSection sectionName="Profile" onClick={onProfileOpen}>
              <CircleUserRound
                className="h-5 w-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </SidebarSection>
            <SidebarSection sectionName="Log Out">
              <Power
                className="h-5 w-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </SidebarSection>
          </nav>
        </div>
        <div className="flex-1 bg-blue-100 p-4">
          <h1 className="text-2xl text-center font-bold text-blue-800">
            Welcome to the Main Area
          </h1>
        </div>
        {profile && (
          <Profile
            onClose={onProfileClose}
            onSave={onProfileSave}
            user={dummyUser}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
