
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import PatientRequest
from db import match_drug, match_trial

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/recommend_drugs")
def recommend_drugs(data: PatientRequest):
    return match_drug(data)

@app.post("/match_trials")
def match_trials(data: PatientRequest):
    return match_trial(data)
