import React from "react";
import Link from "next/link";
import { AuthList } from "@/constants/AuthList";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Auth = () => {
  return (
    <div className="flex gap-2 items-center justify-center shadow-md bg-white rounded-lg px-4 py-2">
      {/* {AuthList.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          passHref
        >
          <Button
            className="cursor-pointer"
            variant={"default"}
          >
            {item.name}
          </Button>
        </Link>
      ))} */}

      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant={"default"}>Sign In</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default Auth;
