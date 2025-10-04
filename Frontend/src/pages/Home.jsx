import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">QuickClaim</h1>
      <p className="mb-6">Fast & Smart Insurance Claims</p>
      <button onClick={() => navigate("/file-claim")} className="bg-blue-500 text-white px-6 py-3 rounded mr-4">
        File a Claim
      </button>
      <button onClick={() => navigate("/claim-tracker")} className="bg-green-500 text-white px-6 py-3 rounded">
        Track Claim
      </button>
    </div>
  );
}
