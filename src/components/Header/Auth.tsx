"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthList } from "@/constants/AuthList";

const Auth = () => {
  return (
    <div className="flex gap-2">
      {AuthList.map((item) => (
        <Link
          key={item.link}
          href={item.link}
        >
          <Button variant="ghost">{item.name}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Auth;
