// // import React, { useState } from "react";

// // export default function CovidPrediction() {
// //   const [formData, setFormData] = useState({});
// //   const [result, setResult] = useState(null);

// //   const symptoms = [
// //     "Fever", "Tiredness", "Dry-Cough", "Difficulty-in-Breathing", "Sore-Throat",
// //     "None_Sympton", "Pains", "Nasal-Congestion", "Runny-Nose", "Diarrhea"
// //   ];
// //   const ageGroups = ["Age_0-9", "Age_10-19", "Age_20-24", "Age_25-59", "Age_60+"];
// //   const genders = ["Gender_Female", "Gender_Male", "Gender_Transgender"];
// //   const contacts = ["Contact_Dont-Know", "Contact_No", "Contact_Yes"];

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async () => {
// //     const response = await fetch("http://localhost:5000/predict", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(formData),
// //     });
// //     const data = await response.json();
// //     setResult(data.prediction);
// //   };

// //   return (
// //     <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md">
// //       <h2 className="text-xl font-bold mb-4 text-center">COVID-19 Prediction</h2>
// //       <div className="grid gap-2">
// //         {[...symptoms, ...ageGroups, ...genders, ...contacts].map((feature) => (
// //           <input
// //             key={feature}
// //             type="number"
// //             name={feature}
// //             placeholder={feature.replace(/_/g, " ")}
// //             onChange={handleChange}
// //             className="p-2 border rounded w-full"
// //           />
// //         ))}
// //         <button onClick={handleSubmit} className="mt-3 bg-blue-500 text-white py-2 px-4 rounded">
// //           Predict
// //         </button>
// //       </div>
// //       {result && <p className="mt-4 text-lg font-semibold text-center">Prediction: {result}</p>}
// //     </div>
// //   );
// // }

// import React, { useState } from "react";

// export default function CovidPrediction() {
//   const [formData, setFormData] = useState({});
//   const [result, setResult] = useState(null);

//   const questions = [
//     "Breathing Problem",
//     "Fever",
//     "Dry Cough",
//     "Sore throat",
//     "Running Nose",
//     "Asthma",
//     "Chronic Lung Disease",
//     "Headache",
//     "Heart Disease",
//     "Diabetes",
//     "Hyper Tension",
//     "Fatigue",
//     "Gastrointestinal",
//     "Abroad travel",
//     "Contact with COVID Patient",
//     "Attended Large Gathering",
//     "Visited Public Exposed Places",
//     "Family working in Public Exposed Places",
//     // "Wearing Masks",
//     // "Sanitization from Market",
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("http://localhost:5001/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       setResult(data.prediction);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching prediction", error);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4 text-center">
//         COVID-19 Prediction
//       </h2>
//       <div className="grid gap-2">
//         {questions.map((question) => (
//           <div key={question} className="mb-2">
//             <label className="block mb-1 font-semibold">{question}</label>
//             <select
//               name={question}
//               onChange={handleChange}
//               className="p-2 border rounded w-full"
//             >
//               <option value="">Select</option>
//               <option value="1">Yes</option>
//               <option value="0">No</option>
//             </select>
//           </div>
//         ))}
//         <button
//           onClick={handleSubmit}
//           className="mt-3 bg-blue-500 text-white py-2 px-4 rounded"
//         >
//           Predict
//         </button>
//       </div>
//       {result && (
//         <p className="mt-4 text-lg font-semibold text-center">
//           Prediction: {result}
//         </p>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function CovidPrediction() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    "Breathing Problem",
    "Fever",
    "Dry Cough",
    "Sore throat",
    "Running Nose",
    "Asthma",
    "Chronic Lung Disease",
    "Headache",
    "Heart Disease",
    "Diabetes",
    "Hyper Tension",
    "Fatigue",
    "Gastrointestinal",
    "Abroad travel",
    "Contact with COVID Patient",
    "Attended Large Gathering",
    "Visited Public Exposed Places",
    "Family working in Public Exposed Places",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.prediction);
      console.log(data);
    } catch (error) {
      console.error("Error fetching prediction", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">
        COVID-19 Prediction
      </h2>
      <div className="grid gap-2">
        {questions.map((question) => (
          <div key={question} className="mb-2">
            <label className="block mb-1 font-semibold">{question}</label>
            <select
              name={question}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            >
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-3 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Predict
        </button>
      </div>
      {result && (
        <p className="mt-4 text-lg font-semibold text-center">
          Prediction: {result}
        </p>
      )}
    </div>
  );
}
