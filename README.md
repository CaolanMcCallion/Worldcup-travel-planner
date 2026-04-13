# World Cup 2026 Travel Route Planner

Unosquare Graduate / Junior SWE Coding Challenge

## Overview

Build a system that helps FIFA World Cup 2026 fans plan optimal travel routes between host cities based on match schedules. The tournament spans **48 teams**, **16 cities**, and **3 countries** (USA, Mexico, Canada).

See [CHALLENGE.md](./CHALLENGE.md) for `The Scenario` and full instructions.

**NOTE**: Clone this repository and copy the contents into a new repository for your account. Please share your Github URL when you are done. 

We recommend spending a maximum 2-3 hours on the challenge (excluding setup); however the time spent is entirely up to the individual.

## A Note on AI Assistance

We encourage the use of AI tools (GitHub Copilot, ChatGPT, Claude, etc.) to help you complete these tasks — this reflects how modern developers work.

However, **understanding matters more than output**. During review, you may be asked to:
- Explain your code and the decisions you made
- Walk through of implementation
- Discuss trade-offs and alternative approaches

Use AI as a productivity booster, not a replacement for understanding. The goal is to demonstrate your problem-solving ability and grasp of the concepts.

## Requirements

You are expected to complete the following:

1. **Implement API endpoints** — Choose one backend (Node/Express, Java/Spring, Python/Flask, or .NET) and implement all REST endpoints
2. **Implement route optimisation** — Build a `NearestNeighbourStrategy` using the Strategy Pattern
3. **Write unit tests** — Add tests to verify your route optimisation algorithm
4. **Implement frontend map component** — Build a `<RouteMap />` component using react-leaflet
5. **Document your approach** — Add comments explaining your reasoning and any trade-offs

## Project Structure

```
junior-challenge/
├── CHALLENGE.md              # Challenge instructions
├── README.md                 # This file
├── seed-data/                # 16 cities, 48 teams, 48 matches
├── postman/                  # Postman collection for API testing
├── frontend/                 # Vite + React + TypeScript app
├── backend/
│   ├── dotnet-webapi/        # .NET 8 / C# skeleton
│   ├── java-spring/          # Spring Boot skeleton
│   ├── node-express/         # Node / Express / TypeScript skeleton
│   └── python-flask/         # Flask skeleton
├── docker-compose.yml        # Optional PostgreSQL
└── .env.example              # Environment configuration
```

## Pre-requisites

### Git

**macOS:**
```bash
# Git is included with Xcode Command Line Tools
xcode-select --install

# Or using Homebrew
brew install git
```

**Windows:**

Download and install from: https://git-scm.com/downloads

### GitHub Account (Optional)

Create a free account at: https://github.com/

### Clone the Repository

```bash
git clone <repository-url>
cd junior-challenge
```

### Additional Pre-requisites

Each project has its own runtime requirements. See the relevant README:

- **Frontend:** Node.js v20+ — see [`frontend/README.md`](frontend/README.md)
- **Node/Express:** Node.js v20+ — see [`backend/node-express/README.md`](backend/node-express/README.md)
- **Java/Spring:** Java 21+ — see [`backend/java-spring/README.md`](backend/java-spring/README.md)
- **Python/Flask:** Python 3.10+ — see [`backend/python-flask/README.md`](backend/python-flask/README.md)
- **.NET:** .NET 8 SDK — see [`backend/dotnet-webapi/README.md`](backend/dotnet-webapi/README.md)

## Getting Started

See each project's README for detailed setup instructions:

- **Frontend:** [`frontend/README.md`](frontend/README.md)
- **Node/Express:** [`backend/node-express/README.md`](backend/node-express/README.md)
- **Java/Spring:** [`backend/java-spring/README.md`](backend/java-spring/README.md)
- **Python/Flask:** [`backend/python-flask/README.md`](backend/python-flask/README.md)
- **.NET:** [`backend/dotnet-webapi/README.md`](backend/dotnet-webapi/README.md)

## Testing APIs

A Postman collection is provided to help test your API endpoints.

See [`postman/README.md`](postman/README.md) for detailed import and usage instructions.

### Quick Start

1. Install [Postman](https://www.postman.com/downloads/)
2. Import [`postman/WorldCup2026_API.postman_collection.json`](postman/WorldCup2026_API.postman_collection.json)
3. Start your backend server on port 3008
4. Run requests from the collection

### Available Endpoints

| Method | Endpoint | Task |
|--------|----------|------|
| GET | `/api/cities` | #1 |
| GET | `/api/matches` | #2 |
| GET | `/api/matches/:id` | #2 |
| POST | `/api/route/optimise` | #3 |
| POST | `/api/route/budget` | #5 |
| POST | `/api/route/best-value` | Bonus |
| POST | `/api/itineraries` | Pre-built |
| GET | `/api/itineraries/:id` | Pre-built |

The collection uses `http://localhost:3008` as the base URL.

## Evaluation Criteria

| Criteria | What We Look For |
|----------|-----------------|
| **Working Solution** | Code compiles, tests pass, features work end-to-end |
| **Code Quality** | Clean, readable, well-structured code |
| **Understanding** | Correct use of patterns, appropriate solutions |
| **Testing** | Meaningful tests that verify behaviour |
| **Problem Solving** | How you approach and break down problems |
| **Documentation** *(Nice to Have)* | Design decisions, diagrams, Postman results and reasoning captured clearly |

---

## Candidate Submission – Caolan McCallion

### Overview
This submission implements the World Cup 2026 Travel Route Planner using the Node.js / Express / TypeScript backend and the provided React + Vite + TypeScript frontend. The system enables fans to plan optimal travel routes between host cities based on match schedules, budget constraints, and optimisation strategies.

---

### Technologies Used

**Backend**
- Node.js (v20)
- Express.js
- TypeScript
- SQLite (better-sqlite3)
- Jest for unit testing

**Frontend**
- React with TypeScript
- Vite
- React Leaflet for map visualisation

**Tools**
- Thunder Client and Postman for API testing
- Git and GitHub for version control

---

### Implemented Features

| Task | Description | Status |
|------|-------------|--------|
| Task 1 | Cities API (`GET /api/cities`) | Complete |
| Task 2 | Matches API (`GET /api/matches`, `GET /api/matches/:id`) | Complete |
| Task 3 | Route Optimisation using Nearest Neighbour Strategy | Complete |
| Task 4 | Unit Tests for Route Optimisation (Jest) | Complete |
| Task 5 | Budget Calculation Endpoint (`POST /api/route/budget`) | Complete |
| Frontend | Interactive Route Map using React Leaflet | Complete |
| Bonus | Best Value Finder (`POST /api/route/best-value`) | Complete |

---

### Design Decisions

- **Strategy Pattern:** Implemented to support interchangeable route optimisation algorithms such as `NearestNeighbourStrategy` and `DateOnlyStrategy`.
- **Modular Architecture:** Logic is separated into models, routes, strategies, and utilities to improve maintainability and scalability.
- **Haversine Formula:** Used to calculate distances between cities for accurate route optimisation.
- **Cost Calculator:** Computes flights, accommodation, and ticket costs to determine feasibility within a given budget.
- **React Leaflet:** Provides an interactive visual representation of optimised routes.

---

### Running the Application

#### Backend
```bash
cd backend/node-express
npm install
npm run seed
npm run dev