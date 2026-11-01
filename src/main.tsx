import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [details, setDetails] = useState(false);
  return (
    <main className="mx-auto max-w-2xl p-8">
      <p className="text-sm font-semibold text-blue-800">DEMO · SYNTETISKA DATA</p>
      <h1 className="mt-4 text-4xl font-semibold">Ditt nästa kundprojekt</h1>
      <p className="mt-5 text-lg">Utforma innehåll och användarresa utifrån uppdraget.</p>
      <button
        type="button"
        className="mt-6 rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        aria-expanded={details}
        aria-controls="demo-details"
        onClick={() => setDetails(!details)}
      >
        {details ? "Dölj information" : "Visa information"}
      </button>
      <div id="demo-details" hidden={!details} className="mt-6 rounded-lg bg-blue-50 p-5">
        Inga kundsystem är anslutna. Ersätt denna startsida med uppdragets faktiska flöde.
      </div>
    </main>
  );
}

const root = document.getElementById("root");
if (root) createRoot(root).render(<StrictMode><App /></StrictMode>);
