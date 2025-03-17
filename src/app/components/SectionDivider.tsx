import { ReactElement } from "react";

type SectionDividerProps = {
  title: string;
};

export const SectionDivider = ({ title }: SectionDividerProps): ReactElement => {
  return (
    <div className="relative flex items-center w-full my-14 font-archivo font-bold">
      <div className="w-full h-[2px] bg-gray-300"></div>

      <span className="absolute left-1/2 -translate-x-1/2 bg-white px-6  text-gray-800">
        {title}
      </span>
    </div>
  );
};
