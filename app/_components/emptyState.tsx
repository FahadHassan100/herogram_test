import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EmptyState = () => {
  return (
    <div className="p-5 py-24 flex items-center flex-col mt-10 border-2 border-gray-500 border-dashed">
      <h2>You don't have any video uploaded</h2>
      <Link href={"/uploadVideo"}>
        <Button className="bg-indigo-600 mt-5">Upload Video</Button>
      </Link>
    </div>
  );
};

export default EmptyState;
