# World Cup 2026 Travel Route Planner

## Overview

A full-stack travel planning application designed to help FIFA World Cup 2026 fans optimise travel routes between host cities based on match schedules, travel distance, and budget constraints.

Built using Node.js, Express, TypeScript, React, and React Leaflet as part of a graduate software engineering coding challenge.

The application enables users to:
- Explore World Cup host cities and match schedules
- Generate optimised travel routes
- Calculate travel budgets
- Visualise routes on an interactive map
- Compare route strategies and costs

---

## Technologies Used

### Backend
- Node.js
- Express.js
- TypeScript
- SQLite (`better-sqlite3`)
- Jest for unit testing

### Frontend
- React
- TypeScript
- Vite
- React Leaflet

### Tools
- Git & GitHub
- Thunder Client
- Postman

---

## Features

| Feature | Description |
|----------|-------------|
| Cities API | Retrieve World Cup host city data |
| Matches API | Retrieve match schedules and match details |
| Route Optimisation | Generate optimised travel routes using the Strategy Pattern |
| Budget Calculator | Calculate estimated travel and accommodation costs |
| Best Value Route Finder | Identify optimal routes within budget constraints |
| Interactive Route Map | Visualise routes using React Leaflet |
| Unit Testing | Jest tests for optimisation logic |

---

## Design Decisions

### Strategy Pattern
Implemented interchangeable optimisation strategies including:
- `NearestNeighbourStrategy`
- `DateOnlyStrategy`

This allows route algorithms to be extended easily without changing application structure.

### Modular Architecture
Application logic is separated into:
- routes
- services
- strategies
- utilities
- models

This improves maintainability and scalability.

### Haversine Formula
Used for accurate distance calculations between host cities during route optimisation.

### Cost Calculation System
Budget calculations combine:
- flight costs
- accommodation costs
- ticket prices

to determine realistic travel feasibility.

### Interactive Mapping
React Leaflet was used to provide a visual representation of generated routes and city locations.

---

## Project Structure

```text
frontend/                 React + Vite + TypeScript frontend
backend/node-express/    Express + TypeScript backend
seed-data/               Match and city seed data
postman/                 API testing collections
```

---

## Running the Application

### Backend

```bash
cd backend/node-express
npm install
npm run seed
npm run dev
```

Backend runs on:

```text
http://localhost:3008
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint |
|--------|----------|
| GET | `/api/cities` |
| GET | `/api/matches` |
| GET | `/api/matches/:id` |
| POST | `/api/route/optimise` |
| POST | `/api/route/budget` |
| POST | `/api/route/best-value` |

---

## Testing

Run backend unit tests:

```bash
cd backend/node-express
npm test
```

---

## Future Improvements

- Real-time flight API integration
- Dynamic pricing support
- User authentication and saved itineraries
- Cloud deployment
- Mobile responsiveness improvements
- Additional optimisation algorithms

---

## Screenshots

_Add screenshots of the route planner, interactive map, and optimisation results here._

---

## Author

Caolan McCallion

MSc Software Development Graduate — Queen’s University Belfast
