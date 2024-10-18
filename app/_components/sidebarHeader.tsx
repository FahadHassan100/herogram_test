import { currentUser } from "@/lib/auth";

const SidebarHeader = async () => {
  const user = await currentUser();
  return (
    <div className="mb-4 w-full border-b-4 border-indigo-100 text-center">
      <span className="font-mono text-xl font-bold tracking-widest">
        {" "}
        <span className="text-indigo-600">Hello </span> {user?.name}
      </span>
    </div>
  );
};

export default SidebarHeader;
