import HeroSection from "../components/HeroSection";
import DashboardOverviewSection from "../components/DashboardOverviewSection";
import SuperAdminDashboardSection from "../components/SuperAdminDashboardSection";
import PractitionerDashboardSection from "../components/PractitionerDashboardSection";
import UserDashboardSection from "../components/UserDashboardSection";
import IntegrationsAndTechStackSection from "../components/IntegrationsAndTechStackSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <HeroSection />
      <DashboardOverviewSection />
      <SuperAdminDashboardSection />
      <PractitionerDashboardSection />
      <UserDashboardSection />
      <IntegrationsAndTechStackSection />
    </main>
  );
}
