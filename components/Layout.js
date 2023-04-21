import Navbar from "@/components/Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}
