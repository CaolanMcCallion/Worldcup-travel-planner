import { NearestNeighbourStrategy } from '../src/strategies/NearestNeighbourStrategy';
import { MatchWithCity } from '../src/strategies/RouteStrategy';


/**
 * NearestNeighbourStrategyTest — YOUR TASK #4
 *
 * ============================================================
 * WHAT YOU NEED TO IMPLEMENT:
 * ============================================================
 *
 * Write unit tests for the NearestNeighbourStrategy.
 * Each test has a TODO comment explaining what to test.
 *
 */


describe('NearestNeighbourStrategy', () => {
  let strategy: NearestNeighbourStrategy;

  beforeEach(() => {
    strategy = new NearestNeighbourStrategy();
  });

  it('should return a valid route for multiple matches (happy path)', () => {
    // Arrange: create multiple matches across different dates/cities
    const matches: MatchWithCity[] = [
      {
        id: 'match-1',
        homeTeam: { id: 'team-1', name: 'Team 1', code: 'T1', group: 'A' },
        awayTeam: { id: 'team-2', name: 'Team 2', code: 'T2', group: 'A' },
        city: {
          id: 'city-1',
          name: 'Mexico City',
          country: 'Mexico',
          latitude: 19.4326,
          longitude: -99.1332,
          stadium: 'Azteca',
          accommodation_per_night: 110,
        },
        kickoff: '2026-06-11T17:00:00Z',
        group: 'A',
        matchDay: 1,
        ticketPrice: 120,
      },
      {
        id: 'match-2',
        homeTeam: { id: 'team-3', name: 'Team 3', code: 'T3', group: 'B' },
        awayTeam: { id: 'team-4', name: 'Team 4', code: 'T4', group: 'B' },
        city: {
          id: 'city-2',
          name: 'New York',
          country: 'USA',
          latitude: 40.7128,
          longitude: -74.006,
          stadium: 'MetLife',
          accommodation_per_night: 300,
        },
        kickoff: '2026-06-12T19:00:00Z',
        group: 'B',
        matchDay: 1,
        ticketPrice: 175,
      },
      {
        id: 'match-3',
        homeTeam: { id: 'team-5', name: 'Team 5', code: 'T5', group: 'C' },
        awayTeam: { id: 'team-6', name: 'Team 6', code: 'T6', group: 'C' },
        city: {
          id: 'city-3',
          name: 'Toronto',
          country: 'Canada',
          latitude: 43.6532,
          longitude: -79.3832,
          stadium: 'BMO Field',
          accommodation_per_night: 210,
        },
        kickoff: '2026-06-13T21:00:00Z',
        group: 'C',
        matchDay: 1,
        ticketPrice: 130,
      },
      {
        id: 'match-4',
        homeTeam: { id: 'team-7', name: 'Team 7', code: 'T7', group: 'D' },
        awayTeam: { id: 'team-8', name: 'Team 8', code: 'T8', group: 'D' },
        city: {
          id: 'city-4',
          name: 'Dallas',
          country: 'USA',
          latitude: 32.7767,
          longitude: -96.797,
          stadium: 'AT&T Stadium',
          accommodation_per_night: 160,
        },
        kickoff: '2026-06-14T17:00:00Z',
        group: 'D',
        matchDay: 1,
        ticketPrice: 195,
      },
      {
        id: 'match-5',
        homeTeam: { id: 'team-9', name: 'Team 9', code: 'T9', group: 'E' },
        awayTeam: { id: 'team-10', name: 'Team 10', code: 'T10', group: 'E' },
        city: {
          id: 'city-5',
          name: 'Vancouver',
          country: 'Canada',
          latitude: 49.2827,
          longitude: -123.1207,
          stadium: 'BC Place',
          accommodation_per_night: 230,
        },
        kickoff: '2026-06-15T19:00:00Z',
        group: 'E',
        matchDay: 1,
        ticketPrice: 105,
      },
    ];

    // Act
    const result = strategy.optimise(matches);

    // Assert
    expect(result.stops.length).toBeGreaterThan(0);
    expect(result.totalDistance).toBeGreaterThan(0);
    expect(result.strategy).toBe('nearest-neighbour');
  });

  it('should return an empty route for empty matches', () => {
    // Arrange
    const matches: MatchWithCity[] = [];

    // Act
    const result = strategy.optimise(matches);

    // Assert
    expect(result.stops).toEqual([]);
    expect(result.totalDistance).toBe(0);
    expect(result.feasible).toBe(false);
  });

  it('should return zero distance for a single match', () => {
    // Arrange
    const matches: MatchWithCity[] = [
      {
        id: 'match-1',
        homeTeam: { id: 'team-1', name: 'Team 1', code: 'T1', group: 'A' },
        awayTeam: { id: 'team-2', name: 'Team 2', code: 'T2', group: 'A' },
        city: {
          id: 'city-1',
          name: 'Mexico City',
          country: 'Mexico',
          latitude: 19.4326,
          longitude: -99.1332,
          stadium: 'Azteca',
          accommodation_per_night: 110,
        },
        kickoff: '2026-06-11T17:00:00Z',
        group: 'A',
        matchDay: 1,
        ticketPrice: 120,
      },
    ];

    // Act
    const result = strategy.optimise(matches);

    // Assert
    expect(result.totalDistance).toBe(0);
    expect(result.stops.length).toBe(1);
    expect(result.stops[0].match.id).toBe('match-1');
  });
});