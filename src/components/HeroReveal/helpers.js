import { GRID_COLS, GRID_ROWS, STAGGER_RING_INTERVAL_MS } from "./constants";

/**
 * Compute the Chebyshev distance (chessboard distance) from each cell
 * to the grid center. Used for radial stagger — center cells open first.
 */
export function computeCellDelays() {
  const centerCol = (GRID_COLS - 1) / 2; // 2.5
  const centerRow = (GRID_ROWS - 1) / 2; // 1.5

  const cells = [];
  let maxDist = 0;

  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      // Chebyshev distance — max of col and row distance from center
      const dist = Math.max(
        Math.abs(col - centerCol),
        Math.abs(row - centerRow)
      );
      if (dist > maxDist) maxDist = dist;
      cells.push({ row, col, dist });
    }
  }

  // Convert distance to delay in seconds
  return cells.map((cell) => ({
    ...cell,
    delay: cell.dist * (STAGGER_RING_INTERVAL_MS / 1000),
  }));
}

/**
 * Compute the maximum total animation time for the grid reveal.
 * Used to know when all cells have finished opening.
 */
export function getMaxRevealDuration() {
  const centerCol = (GRID_COLS - 1) / 2;
  const centerRow = (GRID_ROWS - 1) / 2;
  const maxDist = Math.max(centerCol, centerRow);
  return maxDist * STAGGER_RING_INTERVAL_MS;
}
