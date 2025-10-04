import ClaimCard from "../components/ClaimCard/ClaimCard";

const dummyClaims = [
  { id: "C001", claimType: "Auto", status: "Processing", description: "Car accident on 01-10-2025" },
  { id: "C002", claimType: "Health", status: "Approved", description: "Hospital expenses" },
];

export default function CustomerDashboard() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Your Claims</h2>
      {dummyClaims.map((claim) => <ClaimCard key={claim.id} claim={claim} />)}
    </div>
  );
}
