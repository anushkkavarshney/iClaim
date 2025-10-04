export default function ClaimTable({ claims }) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border px-2 py-1">Claim ID</th>
          <th className="border px-2 py-1">Customer</th>
          <th className="border px-2 py-1">Type</th>
          <th className="border px-2 py-1">Status</th>
          <th className="border px-2 py-1">Date</th>
          <th className="border px-2 py-1">Fraud Score</th>
        </tr>
      </thead>
      <tbody>
        {claims.map((c) => (
          <tr key={c.id}>
            <td className="border px-2 py-1">{c.id}</td>
            <td className="border px-2 py-1">{c.customer}</td>
            <td className="border px-2 py-1">{c.type}</td>
            <td className="border px-2 py-1">{c.status}</td>
            <td className="border px-2 py-1">{c.date}</td>
            <td className="border px-2 py-1">{c.fraudScore}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
