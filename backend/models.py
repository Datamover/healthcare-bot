
from pydantic import BaseModel

class PatientRequest(BaseModel):
    name: str
    age: int
    condition: str
    location: str
