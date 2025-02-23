import { rowData } from "../customTypes";

export interface Analyzer {
  run(matches: rowData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: rowData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
