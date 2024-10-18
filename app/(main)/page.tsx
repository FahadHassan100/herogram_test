import { currentUser } from "@/lib/auth";
import { Metadata } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

export const metadata: Metadata = {
  title: "Home",
};

const prisma = new PrismaClient();

const videoUrl = "../../../public/uploads/c4007971-0566d124.mp4";

export default async function Home() {
  const user = await currentUser();

  const userId = user?.id;

  const userUpload = await prisma.useruploads.findMany({
    where: {
      userid: userId,
    },
  });

  console.log(userUpload);

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
            <a href="">My Videos</a>
            <br />
            <hr />
            <a href="/uploadVideo">Upload Videos</a>
          </div>
        </aside>
        <main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
          <div className="flex justify-evenly">
            <video width="750" height="500" controls>
              <source
                //src="../../../public/uploads/c4007971-0566d124.mp4"
                src={
                  process.env.NEXT_PUBLIC_APP_URL +
                  "/public/uploads/c4007971-0566d124.mp4"
                }
                type="video/mp4"
              />
            </video>
            {userUpload.map((items) => (
              <div className="bg-slate-50"></div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
