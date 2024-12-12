import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  sectionName: string;
  onClick?: () => void;
}

const SidebarSection = ({
  children,
  sectionName,
  onClick = () => {},
}: Props) => {
  return (
    <div
      role="button"
      className=" flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
      onClick={onClick}
    >
      <div className="grid place-items-center mr-4">{children}</div>
      {sectionName}
    </div>
  );
};

export default SidebarSection;
