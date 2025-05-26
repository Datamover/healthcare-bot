
CREATE TABLE drugs (
    id SERIAL PRIMARY KEY,
    drug_name VARCHAR(100),
    condition VARCHAR(100),
    usage TEXT
);
CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    condition VARCHAR(100),
    location VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20)
);
CREATE TABLE trials (
    id SERIAL PRIMARY KEY,
    trial_name VARCHAR(200),
    condition VARCHAR(100),
    location VARCHAR(100),
    eligibility TEXT
);
