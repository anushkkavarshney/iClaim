export default function ClaimCard({ claim }) {
  return (
    <div className="border rounded p-4 shadow-sm mb-2">
      <h3 className="font-semibold">{claim.id} - {claim.claimType}</h3>
      <p>Status: <span className={claim.status === "Approved" ? "text-green-600" : "text-yellow-600"}>{claim.status}</span></p>
      <p>{claim.description}</p>
    </div>
  );
}
