import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const htmlContent = `
      <main>
        <h1>Match Summary Report</h1>
        <strong>${report}</strong>
      </main>
    `;

    fs.writeFileSync("report.html", htmlContent);
  }
}
