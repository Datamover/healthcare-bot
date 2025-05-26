
import streamlit as st
from rapidfuzz import fuzz

trials = [
    {"name": "Heart Health Study", "condition": "heart failure", "location": "Seattle"},
    {"name": "Diabetes Control Trial", "condition": "diabetes", "location": "Chicago"},
]

drugs = {
    "diabetes": ["Metformin", "Insulin"],
    "hypertension": ["Lisinopril", "Amlodipine"]
}

def match_trials(condition, location):
    return [
        t for t in trials
        if fuzz.partial_ratio(condition.lower(), t['condition'].lower()) > 70 and location.lower() in t['location'].lower()
    ]

st.title("AI Healthcare Assistant")

cond = st.text_input("Condition?")
loc = st.text_input("Location?")
if st.button("Find Trials"):
    results = match_trials(cond, loc)
    if results:
        for r in results:
            st.success(f"{r['name']} in {r['location']}")
    else:
        st.warning("No matches.")
