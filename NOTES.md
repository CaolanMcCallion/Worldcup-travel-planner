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
- Added support for switching between DateOnlyStrategy and NearestNeighbourStrategy for easier testing and comparison.

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

## Task 5: Budget API

- Implemented POST `/api/route/budget` using Express.
- Extracted `budget`, `matchIds`, and `originCityId` from the request body.
- Retrieved selected matches and the origin city from the database.
- Retrieved all available flight prices from the database.
- Implemented the `calculate()` function in `CostCalculator`.
- Sorted matches by kickoff date before calculating the trip costs.
- Calculated ticket, flight, and accommodation costs using the provided helper methods.
- Built a cost breakdown object containing flights, accommodation, tickets, and total cost.
- Determined whether the trip was feasible based on total cost and country coverage.
- Checked that all required countries (USA, Mexico, and Canada) were included in the trip.
- Returned the minimum budget required when the selected trip exceeded the user's budget.
- Generated suggestions to help reduce cost when the trip was not feasible.
- Returned the full budget result as JSON.
- Added error handling with a `500 Internal Server Error` response.
- Tested the endpoint successfully using Thunder Client.

---

## Frontend: Route Map

- Implemented the `RouteMap` component using React and React Leaflet.
- Displayed the optimised travel route on an interactive map centred on North America.
- Rendered:
  - A "Start" marker for the origin city.
  - Numbered markers for each stop in the route.
  - Polylines connecting each destination.
- Displayed match details within each marker’s popup, including:
  - Stop number.
  - Home and away team names.
  - Kickoff date formatted using `toLocaleDateString()`.
- Grouped multiple stops within the same city using a custom numbered marker.
- Ensured graceful handling of null routes using a placeholder message.
- Resolved TypeScript and JSX configuration issues by installing React type definitions and updating the frontend environment.

---

## Bonus Challenge: Best Value Finder

- Implemented the `findBestValue()` function in `BestValueFinder`.
- Returned an error result when no matches were available.
- Generated valid combinations of matches that covered all required countries.
- Searched for the combination with the most matches that still fit within budget.
- Returned the closest over-budget option when no valid combination fit the budget.
- Calculated total trip cost using ticket, flight, and accommodation costs.
- Built and returned a full result including matches, route, cost breakdown, countries visited, and message.
- Implemented the POST `/api/route/best-value` endpoint.
- Tested the endpoint successfully using Thunder Client.

---

## Progress Summary

- Backend environment configured and running successfully.
- Database seeded with real World Cup data for accurate testing.
- RESTful APIs implemented for cities, matches, route optimisation, budget calculations, and best-value route selection.
- Nearest Neighbour algorithm implemented using the Strategy Pattern.
- Route validation added to enforce minimum match and country coverage requirements.
- Budget calculation logic implemented for tickets, flights, accommodation, and feasibility checks.
- Best Value Finder implemented to return the strongest match combination within budget.
- Unit tests created and executed successfully using Jest.
- Interactive route map completed in the frontend using React Leaflet.
- GitHub repository established with clear and frequent commits.
- Endpoints tested using Thunder Client to verify correctness.
- Development aligned with best practices in modular design, testing, and error handling.

---

### API Testing
All backend endpoints were manually tested using Thunder Client in Visual Studio Code. This ensured accurate request handling, response validation, and proper error management throughout development.