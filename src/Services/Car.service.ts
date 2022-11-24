import { ApplyBasicQueryCasting, Models } from 'mongoose';
import Car from '../Domains/Car';
import CarNotFound404 from '../Erros/Car404';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  protected model: CarODM;
  constructor() {
    this.model = new CarODM();
  }
  private createCarDomain(cars: ICar): Car {
    return new Car(cars);
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    const { _id: id, status } = newCar as ApplyBasicQueryCasting<Models>;
    const obg = { id, status, ...car };
    return this.createCarDomain(obg);
  }

  public async findAll() {
    const allCar = await this.model.findAll();
    return allCar.map((car) => {
      const { _id: id,
        status,
        model,
        year,
        color,
        buyValue,
        doorsQty,
        seatsQty,
      } = car as ApplyBasicQueryCasting<Models>;
      const obj = {
        id,
        status,
        model,
        year,
        color,
        buyValue,
        doorsQty,
        seatsQty,
      };
      return this.createCarDomain(obj);
    });
  }

  public async findById(data: string) {
    const car = await this.model.findOneById(data);
    if (!car) throw new CarNotFound404('Car not found');
    const { _id: id,
      status,
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty,
    } = car as ApplyBasicQueryCasting<Models>;
    const obj = {
      id,
      status,
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty,
    };
    return this.createCarDomain(obj);
  }
}