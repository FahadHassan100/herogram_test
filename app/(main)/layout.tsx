import Navbar from "@/app/_components/navbar";
import Sidebar from "../_components/sidebar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
