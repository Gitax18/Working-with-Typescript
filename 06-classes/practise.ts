class Enviroment {
  private faunas: string[] = [];

  constructor(
    public floraType: string,
    public faunaType: string,
    protected oxygenLevel: number,
    public isPolluted: boolean
  ) {}

  public changeO2Level(amount: number) {
    this.oxygenLevel += amount;
  }

  public changePollution() {
    this.isPolluted = !this.isPolluted;
  }

  public addFauna(animal: string) {
    this.faunas.push(animal);
  }

  public showSummary(): string {
    if (this.faunas.length === 0) {
      return `\n${this.floraType.toUpperCase()} ecosystem has a oxygen level of ${
        this.oxygenLevel
      }% and it is ${
        this.isPolluted ? "" : "not"
      } polluted. It don't have any faunas right now.`;
    }

    return `\n${this.floraType.toUpperCase()} ecosystem has a oxygen level of ${
      this.oxygenLevel
    }% and it is ${
      this.isPolluted ? "" : "not"
    } polluted.\nFaunas in this ecosystem are: \n\t\t\t\t${this.faunas
      .toString()
      .split(",")
      .join("\n\t\t\t\t")}`;
  }
}

const HydroEco = new Enviroment("hydro", "hydro", 34, false);
const GeoEco = new Enviroment("land", "land", 28, true);

HydroEco.addFauna("goldfish");
HydroEco.addFauna("el");
HydroEco.addFauna("starfish");
HydroEco.addFauna("sea horse");

console.log(HydroEco.showSummary());

console.log(GeoEco.showSummary());
