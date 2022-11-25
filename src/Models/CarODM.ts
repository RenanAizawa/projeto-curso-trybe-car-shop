import {
  ApplyBasicQueryCasting,
  isValidObjectId, Model, model, Models, models, Schema
} from 'mongoose';
import InvalidMongoId422 from '../Erros/Car422';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
  constructor() {
    this.schema = new Schema<ICar>({
      id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find({});
  }

  public async findOneById(id: string): Promise<ApplyBasicQueryCasting<Models>> {
    if (!isValidObjectId(id)) throw new InvalidMongoId422('Invalid mongo id');
    return this.model.findById({ _id: id });
  }

  public async updateById(
    id: string,
    car: Partial<ICar>,
  ): Promise<ApplyBasicQueryCasting<Models>> {
    if (!isValidObjectId(id)) throw new InvalidMongoId422('Invalid mongo id');
    return this.model.findByIdAndUpdate(id, { ...car }, { new: true });
  } 
}