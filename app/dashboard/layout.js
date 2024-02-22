import Navbar from "../../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div className="bg-[#1e2431]">
        <div className="lg:ml-[260px] md:ml-0 ml-0">{children}</div>
      </div>
    </div>
  );
}
