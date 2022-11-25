import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/Car.service';
import cars1, { car1Update, carBody, carBodyUpdate, mockID, mockIDUpdate } from '../helpers';

describe('Verificação de integridade do codigo de CarService', function () {
  const service = new CarService();
  describe('Validação de chamada bem sucedida', function () {
    it('rota get /cars', async function () {
      const car1 = new Car(cars1);
      const cars = [car1];
      sinon.stub(Model, 'find').resolves(cars);

      const result = await service.findAll();

      expect(result).to.be.deep.eq(cars);

      sinon.restore();
    });

    it('rota get /cars/:id', async function () {
      const car1 = new Car(cars1);
      sinon.stub(Model, 'findById').resolves(car1);

      const result = await service.findById(mockID);

      expect(result).to.be.deep.eq(car1);

      sinon.restore();
    });

    it('rota post /cars', async function () {
      const car1 = new Car(cars1);
      sinon.stub(Model, 'create').resolves(car1);

      const result = await service.create(carBody);

      expect(result).to.be.deep.eq(car1);

      sinon.restore();
    });

    it('rota put /cars/:id', async function () {
      const car = new Car(car1Update);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(car);

      const result = await service.findAndUpdate(mockIDUpdate, carBodyUpdate);

      expect(result).to.be.deep.eq(car);

      sinon.restore();
    });
  });
  describe('Validação de chamada mal sucedida', function () {
    it('rota get /cars/:id Error 404', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      try {
        await service.findById(mockID);
      } catch (error: any) {
        expect(error.message).to.be.equal('Car not found');
      }
      //   expect(result);

      sinon.restore();
    });
    it('rota put /cars/:id Error 404', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await service.findAndUpdate(mockIDUpdate, carBodyUpdate);
      } catch (error: any) {
        expect(error.message).to.be.eq('Car not found');
      }
    });
  });
});