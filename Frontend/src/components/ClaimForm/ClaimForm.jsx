import { useState } from "react";

export default function ClaimForm({ onSubmit }) {
  const [claimType, setClaimType] = useState("Auto");
  const [policyNumber, setPolicyNumber] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ claimType, policyNumber, date, description, file });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded">
      <select value={claimType} onChange={(e) => setClaimType(e.target.value)} className="w-full p-2 border rounded">
        <option>Auto</option>
        <option>Health</option>
        <option>Property</option>
      </select>
      <input type="text" placeholder="Policy Number" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} className="w-full p-2 border rounded"/>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded"/>
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded"/>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
