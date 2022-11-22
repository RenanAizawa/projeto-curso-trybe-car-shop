import ICar from '../Interfaces/ICar';

export default class Car {
  protected _id: string | undefined;
  protected _model: string;
  protected _year: number;
  protected _color: string;
  protected _status: boolean;
  protected _buyValue: number;
  protected _doorsQty: number;
  protected _seatsQty: number;

  constructor(car: ICar) {
    this._id = car.id;
    this._model = car.model;
    this._year = car.year;
    this._color = car.color;
    this._status = car.status || false;
    this._buyValue = car.buyValue;
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }
 
  public set id(v : string | undefined) {
    this._id = v;
  }
 
  public get id() : string | undefined {
    return this._id;
  }
  
  public set model(v : string) {
    this._model = v;
  }
 
  public get model() : string {
    return this._model;
  }

  public set year(v : number) {
    this._year = v;
  }
 
  public get year() : number {
    return this._year;
  }

  public set color(v : string) {
    this._color = v;
  }
 
  public get color() : string {
    return this._color;
  }

  public set status(v : boolean) {
    this._status = v;
  }
 
  public get status() : boolean {
    return this._status;
  }

  public set buyValue(v : number) {
    this._buyValue = v;
  }
 
  public get buyValue() : number {
    return this._buyValue;
  }

  public set doorsQty(v : number) {
    this._doorsQty = v;
  }
 
  public get doorsQty() : number {
    return this._doorsQty;
  }

  public set seatsQty(v : number) {
    this._seatsQty = v;
  }
 
  public get seatsQty() : number {
    return this._seatsQty;
  }
}