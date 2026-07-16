/**
 * HeroReveal — Animation constants.
 * All values derived from frame-by-frame analysis of the reference video.
 * Video: Recording 2026-07-16 185911.mp4, 4.99s, 30fps, 1190×688px.
 * 49 frames extracted at 10fps.
 */

// ─── Grid Structure ─────────────────────────────────────────────────
// Observed: 6 columns, 4 rows of paper-colored mask cells
export const GRID_COLS = 6;
export const GRID_ROWS = 4;

// ─── Phase 0: Initial Stillness ─────────────────────────────────────
// Frames 1–9 (T=0ms–800ms): fully masked, paper bg, faint grid lines
export const INITIAL_DELAY_MS = 850;

// ─── Phase 1: Grid Cell Wipe ────────────────────────────────────────
// Each cell opens via clip-path inset shrinking vertically.
// Cell animation duration (how long one cell takes to fully open)
export const CELL_OPEN_DURATION_MS = 400;

// Stagger interval between concentric rings (center → outward)
// Observed: ~80–100ms between each ring wave
export const STAGGER_RING_INTERVAL_MS = 90;

// ─── Phase 2: Navbar Entrance ───────────────────────────────────────
// Frame 20 (T=1900ms): navbar begins appearing at ~10% opacity
// Frame 25 (T=2400ms): navbar fully opaque
export const NAVBAR_DELAY_MS = 1900;
export const NAVBAR_DURATION_MS = 500;

// ─── Easing Curves ──────────────────────────────────────────────────
// Cell open easing — smooth cinematic deceleration (estimate)
export const CELL_EASING = [0.25, 0.1, 0.25, 1.0];

// Navbar entrance easing
export const NAVBAR_EASING = [0.25, 0.1, 0.25, 1.0];

// ─── Grid Line Styling ──────────────────────────────────────────────
// Faint grid lines visible in initial state
export const GRID_LINE_COLOR = "rgba(200, 200, 200, 0.3)";
export const GRID_LINE_WIDTH = 1; // px

// ─── Colors ─────────────────────────────────────────────────────────
export const PAPER_COLOR = "rgb(245, 245, 245)";
