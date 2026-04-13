import { Router } from 'express';
import * as MatchModel from '../models/Match';
import * as CityModel from '../models/City';
import { NearestNeighbourStrategy } from '../strategies/NearestNeighbourStrategy';
import { DateOnlyStrategy } from '../strategies/DateOnlyStrategy';
import * as CostCalculator from '../utils/CostCalculator';
import getDb from '../db/connection';
import { FlightPrice } from '../strategies/RouteStrategy';
import * as BestValueFinder from '../bonus/BestValueFinder';

const router = Router();

/**
 * Route Optimisation Routes — YOUR TASKS #3 and #5
 */

// ============================================================
//  POST /api/route/optimise — YOUR TASK #3
// ============================================================

router.post('/optimise', async (req, res) => {
  try {
    // Get matchIds and originCityId from request body
    const { matchIds, originCityId } = req.body;

    // Optional query param to switch strategy, e.g. ?strategy=date-only
    const strategyType = req.query.strategy;

    // Get the full match objects from the selected IDs
    const matches = await MatchModel.getByIds(matchIds);

    // Get the origin city object
    const originCity = await CityModel.getById(originCityId);

    // Return 404 if origin city is not found
    if (!originCity) {
      return res.status(404).json({ error: 'Origin city not found' });
    }

    // Choose which strategy to use
    const strategy =
      strategyType === 'date-only'
        ? new DateOnlyStrategy()
        : new NearestNeighbourStrategy();

    // Run the optimisation
    const route = strategy.optimise(matches, originCity);

    // Return the optimised route
    res.json(route);
  } catch (error) {
    res.status(500).json({ error: 'Failed to optimise route' });
  }
});

// ============================================================
//  POST /api/route/budget — YOUR TASK #5
// ============================================================

router.post('/budget', async (req, res) => {
  try {
    // Extract budget, matchIds, and originCityId from the request body
    const { budget, matchIds, originCityId } = req.body;

    // Fetch matches by their IDs
    const matches = await MatchModel.getByIds(matchIds);

    // Fetch the origin city
    const originCity = await CityModel.getById(originCityId);

    // Return 404 if origin city is not found
    if (!originCity) {
      return res.status(404).json({ error: 'Origin city not found' });
    }

    // Retrieve all flight prices from the database
    const db = getDb;
    const flightPrices = db
      .prepare('SELECT * FROM flight_prices')
      .all() as FlightPrice[];

    // Calculate the budget result using the CostCalculator
    const result = CostCalculator.calculate(
      matches,
      budget,
      originCityId,
      flightPrices,
      originCity
    );

    // Return the calculated result as JSON
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate budget' });
  }
});

// ============================================================
//  POST /api/route/best-value — BONUS CHALLENGE #1
// ============================================================

router.post('/best-value', async (req, res) => {
  try {
    // Extract budget and originCityId from the request body
    const { budget, originCityId } = req.body;

    // Fetch all matches
    const matches = await MatchModel.getAll();

    // Fetch the origin city
    const originCity = await CityModel.getById(originCityId);

    // Return 404 if origin city is not found
    if (!originCity) {
      return res.status(404).json({ error: 'Origin city not found' });
    }

    // Get all flight prices from the database
    const db = getDb;
    const flightPrices = db
      .prepare('SELECT * FROM flight_prices')
      .all() as FlightPrice[];

    // Find the best value combination
    const result = BestValueFinder.findBestValue(
      matches,
      budget,
      originCityId,
      flightPrices,
      originCity
    );

    // Return the result
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate best value route' });
  }
});

export default router;