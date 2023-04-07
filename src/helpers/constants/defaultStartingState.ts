import { getUUID } from "../utils/getUUID";

export const defaultStartingState = {
  fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  nextMoves: [
    "g1f3",
    "g1h3",
    "b1a3",
    "b1c3",
    "h2h3",
    "h2h4",
    "g2g3",
    "g2g4",
    "f2f3",
    "f2f4",
    "e2e3",
    "e2e4",
    "d2d3",
    "d2d4",
    "c2c3",
    "c2c4",
    "b2b3",
    "b2b4",
    "a2a3",
    "a2a4",
  ],
  lmf: new Array(64).fill(255),
  lmt: new Array(64).fill(255),
  rotated: false,
  computerPlaysDark: false,
  computerPlaysLight: false,
  moveIndex: 0,
  gameId: getUUID(),
  gameEnded: false,
};
