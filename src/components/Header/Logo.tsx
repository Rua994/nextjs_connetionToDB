import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center shadow-md bg-white rounded-lg px-4 py-2">
      <Link href={"/"}>
        <h1 className="font-semibold text-4xl">Rua.</h1>
      </Link>
    </div>
  );
};

export default Logo;
