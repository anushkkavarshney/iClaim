import ClaimTable from "../components/ClaimTable/ClaimTable";

const dummyClaims = [
  { id: "C001", customer: "John Doe", type: "Auto", status: "Processing", date: "01-10-25", fraudScore: 20 },
  { id: "C002", customer: "Jane Smith", type: "Health", status: "Approved", date: "02-10-25", fraudScore: 5 },
];

export default function AgentDashboard() {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Agent Dashboard</h2>
      <ClaimTable claims={dummyClaims} />
    </div>
  );
}
