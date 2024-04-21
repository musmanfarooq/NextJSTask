import Navbar from "@/components/Navbar/NavBar";

export const metadata = {
  title: "Dashboard",
  description: "Test for Mobiz",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div className="p-4 sm:ml-64">{children}</div>
    </main>
  );
}
