## Setup

- Chose Node/Express for the backend due to familiarity from past Master's projects and speed of development
- Set up the project locally and seeded the database to ensure all endpoints could be tested with real data
- Pushed initial setup to GitHub to track progress and maintain version control

---

## Task 1: Cities API

- Set up a GET endpoint for /api/cities using Express router
- Used the CityModel.getAll() function to pull all cities from the database
- Used async/await to make sure the data is returned before sending the response
- Returned the cities as JSON to the client
- Added basic error handling in case the database call fails

---

## Task 2: Matches API

- Implemented a GET endpoint for `/api/matches` to retrieve all matches.
- Added optional query parameters:
  - `?city=` to filter matches by city.
  - `?date=` to filter matches by kickoff date.
- Extracted query parameters using `req.query` and passed them to `MatchModel.getAll()`.
- Ensured filters were optional by allowing values to be `undefined`.
- Implemented a GET endpoint for `/api/matches/:id` to retrieve a specific match by its ID.
- Extracted the ID from the URL using `req.params`.
- Used `MatchModel.getById(id)` to fetch the corresponding match.
- Returned a `404 Not Found` error when a match could not be located.
- Added `500 Internal Server Error` handling for unexpected failures.
- Tested endpoints using the browser and Thunder Client.

---

## Task 3: Route Optimisation API

- Implemented POST `/api/route/optimise` using Express.
- Extracted `matchIds` and `originCityId` from the request body.
- Retrieved full match and city objects from the database using the models.
- Implemented the Nearest Neighbour Strategy to optimise the travel route.
- Sorted matches chronologically by kickoff date.
- Grouped matches by date to ensure only one match is selected per day.
- Calculated distances between cities using the Haversine formula.
- Selected the nearest match based on the current city at each step.
- Tracked the current city as the route progressed.
- Built the final optimised route using the provided `buildRoute` helper.
- Implemented validation logic to ensure:
  - A minimum of five matches are selected.
  - At least one match is attended in each host country (USA, Mexico, and Canada).
- Used a `Set` to determine unique countries visited.
- Returned feasibility status, warnings, and missing country information.
- Returned the optimised route as JSON.
- Added error handling with a `500 Internal Server Error` response.
- Tested the endpoint successfully using Thunder Client.
- Applied the Strategy Pattern to keep optimisation logic modular and maintainable.

---

## Task 4: Unit Testing – Nearest Neighbour Strategy

- Implemented unit tests for the `NearestNeighbourStrategy` using Jest.
- Verified the happy path to ensure a valid optimised route is produced for multiple matches.
- Tested the edge case of an empty matches array to confirm an empty and infeasible route is returned.
- Tested the single match scenario to ensure the total distance is zero and only one stop is generated.
- Configured Jest and `ts-jest` to support TypeScript-based testing.
- Added Jest type definitions and updated the TypeScript configuration.
- Resolved a duplicate Jest configuration issue to ensure tests executed correctly.
- Successfully ran `npm test` and confirmed all tests passed.
- Ensured the optimisation algorithm behaves reliably and handles edge cases appropriately.

---

## Progress Summary

- Backend environment configured and running successfully.
- Database seeded with real World Cup data for accurate testing.
- RESTful APIs implemented for cities, matches, and route optimisation.
- Nearest Neighbour algorithm implemented using the Strategy Pattern.
- Unit tests created and executed successfully using Jest.
- GitHub repository established with clear and frequent commits.
- Endpoints tested using Thunder Client to verify correctness.
- Development aligned with best practices in modular design, testing, and error handling.