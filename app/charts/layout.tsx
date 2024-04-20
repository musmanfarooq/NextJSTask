import Navbar from "@/components/Navbar/NavBar";

export const metadata = {
  title: "Charts",
  description: "Test for Mobiz",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <Navbar />
      </nav>
      <div className="p-4 sm:ml-64">{children}</div>
    </main>
  );
}
