import { ApplyBasicQueryCasting, Models } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import CarNotFound404 from '../Erros/Car404';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODN';

export default class MotorcycleService {
  protected model: MotorcycleODM;
  constructor() {
    this.model = new MotorcycleODM();
  }
  private createMotoDomain(moto: IMotorcycle): Motorcycle {
    return new Motorcycle(moto);
  }
  public async create(moto: IMotorcycle) {
    const newCar = await this.model.create(moto);
    const { _id: id, status } = newCar as ApplyBasicQueryCasting<Models>;
    const obg = { id, status, ...moto };
    return this.createMotoDomain(obg);
  }

  public async findAll() {
    const allCar = await this.model.findAll();
    return allCar.map((moto) => {
      const { _id: id,
        status,
        model,
        year,
        color,
        buyValue,
        category,
        engineCapacity,
      } = moto as ApplyBasicQueryCasting<Models>;
      const obj = {
        id,
        status,
        model,
        year,
        color,
        buyValue,
        category,
        engineCapacity,
      };
      return this.createMotoDomain(obj);
    });
  }

  public async findById(data: string) {
    const car = await this.model.findOneById(data);
    if (!car) throw new CarNotFound404('Motorcycle not found');
    const { _id: id,
      status,
      model,
      year,
      color,
      buyValue,
      category,
      engineCapacity,
    } = car as ApplyBasicQueryCasting<Models>;
    const obj = {
      id,
      status,
      model,
      year,
      color,
      buyValue,
      category,
      engineCapacity,
    };
    return this.createMotoDomain(obj);
  }

  public async findAndUpdate(ids: string, car: Partial<IMotorcycle>) {
    const carN = await this.model.updateById(ids, car);
    if (!carN) throw new CarNotFound404('Motorcycle not found');
    const { _id: id,
      status,
      model,
      year,
      color,
      buyValue,
      category,
      engineCapacity,
    } = carN as ApplyBasicQueryCasting<Models>;
    const obj = {
      id,
      status,
      model,
      year,
      color,
      buyValue,
      category,
      engineCapacity,
    };
    return this.createMotoDomain(obj);
  }
}