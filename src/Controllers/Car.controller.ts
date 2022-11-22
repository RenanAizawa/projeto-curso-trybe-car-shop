import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/Car.service';

export default class CarController {
  protected _req: Request;
  protected _res: Response;
  protected _next: NextFunction;
  protected service: CarService;
  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this.service = new CarService();
  }

  public async newCar() {
    const car = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status,
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };
    try {
      const cadastro = await this.service.create(car);
      return this._res.status(201).json(cadastro);
    } catch (error) {
      this._next(error);
    }
  }
}