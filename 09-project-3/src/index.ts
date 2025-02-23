import fs from "fs";
import CSVFileReader from "./classes/abstract/CSVFileReader";
import { MatchResult } from "./customTypes";
import MatchReader from "./classes/MatchReader";
import { Summary } from "./classes/Summary";
import { WinAnalysis } from "./classes/analyzers/winAnalysis";
import { ConsoleReport } from "./classes/reportTargets/consoleReport";

const csvReader = new MatchReader("football.csv");
csvReader.read();
const matches = csvReader.data;
const MatchSummary = new Summary(
  new WinAnalysis("Man United"),
  new ConsoleReport()
);

MatchSummary.buildAndPrintReport(matches);
