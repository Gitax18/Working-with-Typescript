import CSVFileReader from "./abstract/CSVFileReader";
import { MatchResult } from "../enums";
import { stringToDate } from "../util";

// type of data we are getting in this application
export type rowData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export default class MatchReader extends CSVFileReader<rowData> {
  mapRow(row: string[]): rowData {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
