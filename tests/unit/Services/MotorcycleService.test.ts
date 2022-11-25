import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/Motorcycle.service';
import {
  mockMotoID,
  mockMotoIDUpdate, moto1, motoBody, motoBodyUpdate, motoUpdate1,
} from '../helpers';

describe('Verificação de integridade do codigo de MotorcycleService', function () {
  const service = new MotorcycleService();
  describe('Validação de chamada bem sucedida', function () {
    it('rota get /motorcycles', async function () {
      const car1 = new Motorcycle(moto1);
      const cars = [car1];
      sinon.stub(Model, 'find').resolves(cars);
  
      const result = await service.findAll();
  
      expect(result).to.be.deep.eq(cars);
  
      sinon.restore();
    });
  
    it('rota get /motorcycles/:id', async function () {
      const car1 = new Motorcycle(moto1);
      sinon.stub(Model, 'findById').resolves(car1);
  
      const result = await service.findById(mockMotoID);
  
      expect(result).to.be.deep.eq(car1);
  
      sinon.restore();
    });
  
    it('rota post /motorcycles', async function () {
      const car1 = new Motorcycle(moto1);
      sinon.stub(Model, 'create').resolves(car1);
  
      const result = await service.create(motoBody);
  
      expect(result).to.be.deep.eq(car1);
  
      sinon.restore();
    });
  
    it('rota put /motorcycles/:id', async function () {
      const car = new Motorcycle(motoUpdate1);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(car);
  
      const result = await service.findAndUpdate(mockMotoIDUpdate, motoBodyUpdate);
  
      expect(result).to.be.deep.eq(car);
  
      sinon.restore();
    });
  });
  describe('Validação de chamada mal sucedida', function () {
    it('rota get /motorcycles/:id', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      try {
        await service.findById(mockMotoID);
      } catch (error: any) {
        expect(error.message).to.be.eq('Motorcycle not found');
      }
    });

    it('rota put /motorcycles/:id', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await service.findAndUpdate(mockMotoIDUpdate, motoBodyUpdate);
      } catch (error: any) {
        expect(error.message).to.be.eq('Motorcycle not found');
      }
    });
  });
});