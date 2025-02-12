import fs from "fs";
import CSVFileReader from "./classes/abstract/CSVFileReader";
import { MatchResult } from "./enums";
import MatchReader from "./classes/MatchReader";

const csvReader = new MatchReader("football.csv");
csvReader.read();
const matches = csvReader.data;
// lets count how many matches wins my manchester united team as Home and Away team.

let manUnitedWins = 0;

for (let i = 0; i < matches.length; i++) {
  if (matches[i][1] == "Man United" && matches[i][5] == MatchResult.HomeWin)
    manUnitedWins++;
  if (matches[i][2] == "Man United" && matches[i][5] == MatchResult.AwayWin)
    manUnitedWins++;
}
console.log("Man United has won", manUnitedWins, "games !!!");
