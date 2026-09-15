from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


# ---------------------------------------
# CREATE FASTAPI APP
# ---------------------------------------

app = FastAPI(
    title="CivicAssist API",
    description="Backend API for CivicAssist",
    version="1.0.0"
)


# ---------------------------------------
# CORS
# ---------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------
# DATABASE (TEMPORARY IN-MEMORY STORAGE)
# ---------------------------------------

complaints = []

next_complaint_id = 1


# ---------------------------------------
# COMPLAINT MODEL
# ---------------------------------------

class Complaint(BaseModel):
    name: str
    category: str
    description: str
    location: str


# ---------------------------------------
# HEALTH CHECK
# ---------------------------------------

@app.get("/api/health")
def health_check():

    return {
        "status": "success",
        "message": "CivicAssist backend is running!"
    }


# ---------------------------------------
# CREATE COMPLAINT
# ---------------------------------------

@app.post("/api/complaints")
def create_complaint(complaint: Complaint):

    global next_complaint_id

    new_complaint = {
        "id": next_complaint_id,
        "name": complaint.name,
        "category": complaint.category,
        "description": complaint.description,
        "location": complaint.location,
        "status": "Submitted"
    }

    complaints.append(new_complaint)

    next_complaint_id += 1

    return {
        "message": "Complaint submitted successfully",
        "complaint": new_complaint
    }


# ---------------------------------------
# TRACK COMPLAINT
# ---------------------------------------

@app.get("/api/complaints/{complaint_id}")
def get_complaint(complaint_id: int):

    for complaint in complaints:

        if complaint["id"] == complaint_id:

            return {
                "complaint": complaint
            }

    raise HTTPException(
        status_code=404,
        detail="Complaint not found"
    )


# ---------------------------------------
# GET ALL COMPLAINTS
# ---------------------------------------

@app.get("/api/complaints")
def get_all_complaints():

    return {
        "complaints": complaints
    }