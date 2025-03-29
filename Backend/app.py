from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load trained model
model = joblib.load("covid_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        features = [int(data.get(q, 0)) for q in [
            "Breathing Problem", "Fever", "Dry Cough", "Sore throat", "Running Nose",
            "Asthma", "Chronic Lung Disease", "Headache", "Heart Disease", "Diabetes",
            "Hyper Tension", "Fatigue", "Gastrointestinal", "Abroad travel",
            "Contact with COVID Patient", "Attended Large Gathering",
            "Visited Public Exposed Places", "Family working in Public Exposed Places"
        ]]
        
        prediction = model.predict([features])[0]
        result = "COVID Positive" if prediction == 1 else "COVID Negative"

        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
