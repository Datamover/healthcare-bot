
from models import PatientRequest

def match_drug(data: PatientRequest):
    condition_drug_map = {
        "diabetes": [
            {"drug_name": "Metformin", "usage": "Type 2 Diabetes"},
            {"drug_name": "Insulin", "usage": "Type 1 and severe Type 2"}
        ],
        "hypertension": [
            {"drug_name": "Lisinopril", "usage": "ACE Inhibitor"},
            {"drug_name": "Amlodipine", "usage": "Calcium channel blocker"}
        ]
    }
    return condition_drug_map.get(data.condition.lower(), [])

def match_trial(data: PatientRequest):
    trials = [
        {"trial_name": "Heart Health Study", "location": "Seattle", "eligibility": "Adults 40+"},
        {"trial_name": "Diabetes Trial", "location": "Chicago", "eligibility": "Ages 30-65"}
    ]
    return [t for t in trials if data.location.lower() in t["location"].lower()]
