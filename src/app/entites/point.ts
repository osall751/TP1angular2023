export class Point {
  constructor(private _abs: number, private _ord: number) {}

  public get ord(): number {
    return this._ord;
  }
  public set ord(value: number) {
    this._ord = value;
  }
  public get abs(): number {
    return this._abs;
  }
  public set abs(value: number) {
    this._abs = value;
  }

  /**
   * affcherPoint
   */

  public affcherPoint(){
    return "("+this.abs+","+this.ord+")";
  }
  /**
   * calculerDistance(p: Point) */
  public calculerDistance(p: Point): number {
    let dx = Math.pow(this.abs - p.abs, 2);
    let dy = Math.pow(this.ord - p.ord, 2);
    return Math.sqrt(dx + dy);
  }

  /**
   * calculerMilieu(p: Point) */
  public calculerMilieu(p: Point) {
    return new Point(
      (this.abs + p.abs) / 2,
      (this.ord + p.ord) / 2
    );
  }
}
