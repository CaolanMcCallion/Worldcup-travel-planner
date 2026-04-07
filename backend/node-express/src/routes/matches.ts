import { Router } from 'express';
import * as MatchModel from '../models/Match';

const router = Router();

/**
 * Match Routes — YOUR TASK #2
 *
 * Implement the REST endpoints for matches.
 */

// ============================================================
//  GET /api/matches — Return matches with optional filters
// ============================================================

router.get('/', async (req, res) => {
// When a GET request is made to /api/matches then the function runs

try{
// Optional query params from the URL, e.g. ?city=city-atlanta?date=2026-06-14 
  const {city, date} = req.query;

  // Pass the filters into the model
  // If city/date are not given then they will be undefined
  const matches = await MatchModel.getAll({
    city: city as string | undefined,
    date: date as string | undefined,
  });

  // Then returns the matches as JSON text
  res.json(matches);
} catch(error){
  // If there is an issue then a server error will be given
  res.status(500).json({ error: 'Failed to fetch matches' });
}
});

// ============================================================
//  GET /api/matches/:id — Return a single match by ID
// ============================================================
//
// TODO: Implement this endpoint
//
// Hint: MatchModel.getById(id) returns a match or undefined.
// Return 404 if the match is not found.
//
// ============================================================

router.get('/:id', async (req, res) => {
  // When a GET request is made to /api/matches/id then the function will run

try {
  // Gets the ID from the URL
  const { id } = req.params;

  // Call the model to get a match by ID
  const match = await MatchModel.getById(id);

  // If no match is found then a 404 is returned
  if( !match ) {
      return res.status(404).json({ error: 'Match not found' });
  }
  // If a match is found it returns as JSON text
 res.json(match);
  } catch (error) {
    //If something goes wrong a server error will be shown
    res.status(500).json({ error: 'Failed to find a Match' });
  }
});

export default router;
