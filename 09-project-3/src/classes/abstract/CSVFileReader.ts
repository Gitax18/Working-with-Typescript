import fs from "fs";

// rowType generic type is an tuple.
abstract class CSVFileReader<rowType> {
  filename: string;
  data: rowType[] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  abstract mapRow(row: string[]): rowType;

  read(): void {
    this.data = fs
      // reading file
      .readFileSync(this.filename, { encoding: "utf-8" })
      // splitting string: string[]
      .split("\n")
      // converting array of string to array of string array's: string[][]
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}

export default CSVFileReader;
