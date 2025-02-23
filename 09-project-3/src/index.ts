import MatchReader from "./classes/MatchReader";
import { Summary } from "./classes/Summary";
import { WinAnalysis } from "./classes/analyzers/winAnalysis";
import { ConsoleReport } from "./classes/reportTargets/consoleReport";
import { HtmlReport } from "./classes/reportTargets/htmlReport";

const csvReader = new MatchReader("football.csv");
csvReader.read();
const matches = csvReader.data;

const MatchSummaryOnConsole = new Summary(
  new WinAnalysis("Man United"),
  new ConsoleReport()
);

const MatchSummaryOnHtml = new Summary(
  new WinAnalysis("Man United"),
  new HtmlReport()
);

MatchSummaryOnConsole.buildAndPrintReport(matches);
MatchSummaryOnHtml.buildAndPrintReport(matches);
