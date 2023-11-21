import { Point } from './point';

export class TroisPoint {
  constructor(
    private _premier: Point,
    private _second: Point,
    private _troisieme: Point
  ) {}

  public get troisieme(): Point {
    return this._troisieme;
  }
  public set troisieme(value: Point) {
    this._troisieme = value;
  }
  public get second(): Point {
    return this._second;
  }
  public set second(value: Point) {
    this._second = value;
  }
  public get premier(): Point {
    return this._premier;
  }
  public set premier(value: Point) {
    this._premier = value;
  }

  /**
   * TesterAlignement()
   */
  public TesterAlignement() {
    let AB = this.premier.calculerDistance(this.second);
    let AC = this.premier.calculerDistance(this.troisieme);
    let BC = this.second.calculerDistance(this.troisieme);

    return AB == AC + BC || AC == AB + BC || BC == AC + AB;
  }

  /**
   * estIsocele() */
  public estIsocele() {
    let AB = this.premier.calculerDistance(this.second);
    let AC = this.premier.calculerDistance(this.troisieme);
    let BC = this.second.calculerDistance(this.troisieme);

    return AB == AC ||  AB == BC ||  BC == AC
  }
}
