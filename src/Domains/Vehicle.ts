import ICar from '../Interfaces/ICar';

export default class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  constructor(car: ICar) {
    if (car.id) this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
  }
}