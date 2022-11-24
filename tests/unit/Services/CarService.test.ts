import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/Car.service';
import cars1, { carBody, mockID } from '../helpers';

describe('Verificação de integridade do codigo', function () {
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
  });
  describe('Validação de chamada mal sucedida', function () {
    // it('rota get /cars/:i Error 404', async function () {
    //   sinon.stub(Model, 'findById').resolves({});

    //   await service.findById(mockID);

    //   //   expect(result);

    //   sinon.restore();
    // });
  });
});