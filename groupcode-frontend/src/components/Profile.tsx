import { X } from "lucide-react";
import User from "../types/User";
import GunterImage from "../assets/Gunter.png";

interface Props {
  user: User;
  onClose: () => void;
  onSave: () => void;
}

const Profile = ({ user, onClose, onSave }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 antialiased font-medium text-gray-800">
      <div className="max-w-sm p-6 mx-auto bg-white border border-gray-200 shadow rounded-xl hover:shadow-lg transition-all duration-150 ease-linear">
        <div className="relative">
          <a href="#" className="absolute top-1.5 right-1.5" onClick={onClose}>
            <X
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 cursor-pointer fill-current text-slate-500 hover:text-slate-900"
            />
          </a>
          <h1 className="text-3xl font-bold text-center">Profile</h1>
          <p className="text-sm text-gray-500 min-w-72"></p>
        </div>

        <div className="flex justify-center mb-6 mt-6">
          <img
            src={GunterImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-slate-200 shadow-md"
          />
        </div>

        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-sm text-slate-600">Name</label>
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Name"
            defaultValue={user.name}
          />
        </div>

        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-sm text-slate-600">
            Description
          </label>
          <textarea
            className="w-full h-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow resize-none"
            placeholder="Your Description"
            defaultValue={user.description}
          />
        </div>
        <div className="flex flex-row mt-6 space-x-2 justify-evenly">
          <a
            href="#"
            onClick={onSave}
            className="w-full py-3 text-sm font-medium text-center text-white transition duration-150 ease-linear bg-green-600 border border-green-600 rounded-lg hover:bg-green-500"
          >
            Save
          </a>
          <a
            href="#"
            onClick={onClose}
            className="w-full py-3 text-sm text-center text-gray-500 transition duration-150 ease-linear bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
