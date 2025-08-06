
import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-800">AiForma</h1>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Book demo
        </button>
      </header>

      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-4xl font-semibold mb-4">AI som svarer telefonen – så du slipper</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          AiForma gir frisører og klinikker en AI som tar telefonen, booker timer og gir kundeservice – 24/7.
        </p>
        <button className="mt-8 bg-blue-800 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Kom i gang gratis
        </button>
      </section>

      <section className="py-16 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-12">Slik fungerer det</h3>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
          <div>
            <div className="text-4xl mb-4">📞</div>
            <h4 className="font-bold text-lg mb-2">AI svarer telefonen</h4>
            <p className="text-gray-600">Kunden ringer, og AI tar samtalen – høflig og profesjonelt.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📅</div>
            <h4 className="font-bold text-lg mb-2">Booker automatisk</h4>
            <p className="text-gray-600">Timer legges rett inn i kalender eller bookingsystem.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">✅</div>
            <h4 className="font-bold text-lg mb-2">Du slipper å svare</h4>
            <p className="text-gray-600">Spar tid og fokuser på kundene i salongen.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <h3 className="text-3xl font-semibold mb-8">Perfekt for</h3>
        <p className="text-lg text-gray-600 mb-6">Vi hjelper små bedrifter som vil ha mer tid og færre avbrudd.</p>
        <ul className="flex flex-wrap justify-center gap-6 text-gray-700 text-lg font-medium">
          <li className="bg-white shadow px-6 py-3 rounded-xl">Frisører</li>
          <li className="bg-white shadow px-6 py-3 rounded-xl">Hudpleiere</li>
          <li className="bg-white shadow px-6 py-3 rounded-xl">Massasjeterapeuter</li>
          <li className="bg-white shadow px-6 py-3 rounded-xl">Klinikker</li>
        </ul>
      </section>

      <section className="py-16 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-12">Priser</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Starter</h4>
            <p className="text-3xl font-bold mb-4">699 kr/mnd</p>
            <p className="text-gray-600">AI tar telefonen, booker og sender SMS</p>
          </div>
          <div className="border-2 border-blue-800 rounded-xl p-6 shadow-lg bg-blue-50">
            <h4 className="text-xl font-bold mb-2">Pro</h4>
            <p className="text-3xl font-bold mb-4">1199 kr/mnd</p>
            <p className="text-gray-600">Alt i Starter + integrasjon med ditt system</p>
          </div>
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Premium</h4>
            <p className="text-3xl font-bold mb-4">1999 kr/mnd</p>
            <p className="text-gray-600">Alt i Pro + personlig AI-stemme og prioritet</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-center p-6 text-sm text-gray-600">
        © 2025 AiForma. Alle rettigheter reservert. | hello@aiforma.no
      </footer>
    </div>
  );
}
