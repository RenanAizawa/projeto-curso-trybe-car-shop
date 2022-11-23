import { ApplyBasicQueryCasting, Models } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(cars: ICar | null): Car | null {
    if (cars) {
      return new Car(cars);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    console.log('log de newCar >>>>>', newCar);
    const { _id: id, status } = newCar as ApplyBasicQueryCasting<Models>;
    const obg = { id, status, ...car };
    return this.createCarDomain(obg);
    // console.log('retorno do novo car>>>>>>>', {
    //   id,
    //   status,
    //   ...car,
    // });
    
    // return {
    //   id,
    //   status,
    //   ...car,
    // };
  }
}