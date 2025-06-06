import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CovidPrediction() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const questions = [
    "Breathing Problem",
    "Fever",
    "Dry Cough",
    "Sore Throat",
    "Running Nose",
    "Asthma",
    "Chronic Lung Disease",
    "Headache",
    "Heart Disease",
    "Diabetes",
    "Hypertension",
    "Fatigue",
    "Gastrointestinal Issues",
    "Abroad Travel",
    "Contact with COVID Patient",
    "Attended Large Gathering",
    "Visited Public Exposed Places",
    "Family Working in Public Exposed Places",
    "Wearing Masks",
    "Sanitization from Market",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Check if all fields are filled
    if (Object.keys(formData).length !== questions.length) {
      alert("Please select an option for each symptom.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(" http://localhost:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // console.log(data);
      setLoading(false);
      navigate("/report", { state: { result: data.prediction } });
    } catch (error) {
      console.error("Error fetching prediction", error);
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/realistic-coronavirus-background_52683-35484.jpg)",
      }}
    >
      <nav className="bg-gray-800 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">COVID-19 Prediction System</h1>
      </nav>
      <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-bold mb-6 text-center">
          Fill the form according to symptoms you are experiencing
        </h2>
        <div className="grid gap-4">
          {questions.map((question, index) => (
            <div key={index} className="mb-2">
              <label className="block mb-1 font-semibold">{question}</label>
              <select
                name={question}
                onChange={handleChange}
                className="p-2 border rounded w-full bg-gray-100"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center p-4 mt-10 w-full">
        <p>COVID-19 Prediction System &copy; 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}

// https://covid-detection-using-ml-1.onrender.com/
