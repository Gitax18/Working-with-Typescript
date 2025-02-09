import fs from "fs";

const matches = fs
  // reading file
  .readFileSync("football.csv", { encoding: "utf-8" })
  // splitting string: string[]
  .split("\n")
  // converting array of string to array of string array's: string[][]
  .map((row: string): string[] => row.split(","));

// lets count how many matches wins my manchester united team as Home and Away team.
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (let i = 0; i < matches.length; i++) {
  if (matches[i][1] == "Man United" && matches[i][5] == MatchResult.HomeWin)
    manUnitedWins++;
  if (matches[i][2] == "Man United" && matches[i][5] == MatchResult.AwayWin)
    manUnitedWins++;
}
console.log("Man United has won", manUnitedWins, "games !!!");
