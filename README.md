# hospital_api
# to start server use "npm start" command
# node_module is not included here so first install node module using "npm install" command
# use postman to see the responce of API
# there are some URL that only working with this API
# http://localhost:8000/doctors/register             → with username and password (request type POST)
# http://localhost:8000/doctors/login                → with username and password (request type POST)
# http://localhost:8000/patients/register            → with number i.e number = 123456789 (request type POST)
# http://localhost:8000/patients/:id/create_report   → id should be of patient  (request type POST)
# http://localhost:8000/patients/:id/all_reports     → id should be of patient  (request type GET)
# http://localhost:8000/reports/:status              → use this status only 'Nagetive','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit' (request type GET)
