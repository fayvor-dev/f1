import PageHeader from "@/components/page-header";
import DriverCard from "@/components/driver-card";
import { drivers } from "@/lib/drivers";

export const metadata = { title: "Drivers — APEX" };

export default function DriversPage() {
  const sorted = [...drivers].sort((a, b) => a.championshipPosition - b.championshipPosition);

  return (
    <div className="bg-carbon-950 min-h-screen">
      <PageHeader
        eyebrow="THE GRID"
        title="Drivers"
        description="Twenty of the world's fastest drivers, ranked by championship position."
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((driver, i) => (
            <DriverCard driver={driver} index={i} key={driver.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
