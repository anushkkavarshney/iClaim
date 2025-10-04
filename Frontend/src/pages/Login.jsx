import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("customer");

  const handleLogin = () => {
    if (role === "customer") navigate("/customer-dashboard");
    else navigate("/agent-dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <label className="block mb-2">Select Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded mb-4">
        <option value="customer">Customer</option>
        <option value="agent">Agent / Admin</option>
      </select>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
    </div>
  );
}
