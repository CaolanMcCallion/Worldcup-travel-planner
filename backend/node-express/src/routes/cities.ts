import { Router } from 'express'; // Imports router from Express
import * as CityModel from '../models/City'; // Imports all functions from Citymodel 

const router = Router(); // Creates a new router instance

/**
 * City Routes — YOUR TASK #1
 *
 * Implement the REST endpoints for cities.
 */

// ============================================================
//  GET /api/cities — Return all host cities
// ============================================================

router.get('/', async (_req, res) => {
  // When a get request is made to /api/cities this function will run

  try{
    // Calls the model function to get all Cities from the database
    const cities = await CityModel.getAll();

    // Sends the cities back as JSON in the frontend
    res.json(cities);
  }catch (error){
  res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

export default router; // Exports this router so it can be used in index.ts
