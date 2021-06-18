const FIREBASE_DOMAIN = "https://invoicely-3c3a9-default-rtdb.firebaseio.com";

export async function getInvoices(type) {
  const response = await fetch(`${FIREBASE_DOMAIN}/.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong, could not fetch invoices"
    );
  }

  const invoices = [];

  data.forEach((el) => invoices.push(el));

  if (type === "All") {
    return invoices;
  }

  const filteredBy = invoices.filter((el) => el.status === type.toLowerCase());
  console.log(invoices);
  return filteredBy;
}
