import React from "react";
import { useLocation } from "react-router-dom";

export default function ReportPage() {
  const location = useLocation();
  const { result, symptoms } = location.state || {
    result: "N/A",
    symptoms: [],
  };
  const precautions = [
    "Isolate yourself immediately.",
    "Wear a mask at all times.",
    "Maintain social distancing.",
    "Regularly sanitize your hands.",
    "Consult a healthcare provider.",
    "Monitor symptoms and seek medical attention if they worsen.",
  ];

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-between">
      <nav className="bg-gray-800 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">COVID-19 Prediction Report</h1>
      </nav>

      <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Covid Report</h2>
        <div className="mb-4 flex justify-evenly">
          <h3 className="text-xl font-semibold">Prediction Result:</h3>
          <p className="text-lg text-gray-800">{result}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Precautions:</h3>
          <ul className="list-disc list-inside ml-4">
            {result === "COVID Positive" ? (
              precautions.map((precaution, index) => (
                <li key={index} className="text-red-700">
                  {precaution}
                </li>
              ))
            ) : (
              <li className="text-green-700">
                Congratulations! You are COVID negative. Stay healthy!
              </li>
            )}
          </ul>
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center p-4 mt-10 w-full">
        <p>COVID-19 Prediction System &copy; 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}
