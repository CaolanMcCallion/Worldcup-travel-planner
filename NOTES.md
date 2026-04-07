## Setup

- Chose Node/Express for the backend due to familiarity from past Master's projects and speed of development
- Set up the project locally and seeded the database to ensure all endpoints could be tested with real data
- Pushed initial setup to GitHub to track progress and maintain version control

## Task 1: Cities API

- Set up a GET endpoint for /api/cities using Express router
- Used the CityModel.getAll() function to pull all cities from the database
- Used async/await to make sure the data is returned before sending the response
- Returned the cities as JSON to the client
- Added basic error handling in case the database call fails