export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export type rowData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
