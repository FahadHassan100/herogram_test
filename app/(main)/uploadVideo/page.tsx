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
        <aside className="sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
          <div className="my-4 w-full border-b-4 border-indigo-100 text-center">
            <span className="font-mono text-xl font-bold tracking-widest">
              {" "}
              <span className="text-indigo-600">Hello </span> {user?.name}
            </span>
          </div>
          <div className="my-4">
            <a href="/">My Videos</a>
            <br />
            <hr />
            <a href="/uploadVideo">Upload Videos</a>
          </div>
        </aside>
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
