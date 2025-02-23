import { MatchResult, rowData } from "../../customTypes";
import { Analyzer } from "../Summary";

export class WinAnalysis implements Analyzer {
  public teamName: string;
  constructor(teamName: string) {
    this.teamName = teamName;
  }

  run(matches: rowData[]): string {
    let wins = 0;

    for (let i = 0; i < matches.length; i++) {
      if (
        matches[i][1] == this.teamName &&
        matches[i][5] == MatchResult.HomeWin
      )
        wins++;
      if (
        matches[i][2] == this.teamName &&
        matches[i][5] == MatchResult.AwayWin
      )
        wins++;
    }

    return `${this.teamName} has won ${wins} games !!!`;
  }
}
