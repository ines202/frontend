import Image from "next/image";
import React from "react";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative h-40 w-40 p-2 drop-shadow-2">
        <Image
          src={"/images/logo/logo.png"}
          width={160}
          height={160}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          alt="profile"
        />
      </div>
      <input
        type="submit"
        value="Go to Dashboard"
        className="w-min cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
      />
    </div>
  );
};

export default Homepage;
