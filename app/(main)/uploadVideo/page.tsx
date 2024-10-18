import UploadPage from "@/app/_components/uploadPage";
import { currentUser } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const UploadVideo = async () => {
  const user = await currentUser();
  return (
    <div>
      <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
          <div className="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">
            <UploadPage />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UploadVideo;
