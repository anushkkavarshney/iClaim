export async function submitClaim(claim) {
  const formData = new FormData();
  for (let key in claim) {
    formData.append(key, claim[key]);
  }
  const res = await fetch("http://localhost:5000/api/submitClaim", { method: "POST", body: formData });
  return await res.json();
}
