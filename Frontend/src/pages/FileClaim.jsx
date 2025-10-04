import ClaimForm from "../components/ClaimForm/ClaimForm";
import { submitClaim } from "../services/api";

export default function FileClaim() {
  const handleSubmit = async (claim) => {
    const result = await submitClaim(claim);
    alert(`Claim submitted! ID: ${result.id}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">File a Claim</h2>
      <ClaimForm onSubmit={handleSubmit} />
    </div>
  );
}
