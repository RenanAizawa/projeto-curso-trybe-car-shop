import {
  ApplyBasicQueryCasting,
  isValidObjectId,
  model,
  Model,
  Models, models,
  Schema,
} from 'mongoose';
import InvalidMongoId422 from '../Erros/Car422';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findOneById(id: string): Promise<ApplyBasicQueryCasting<Models>> {
    if (!isValidObjectId(id)) throw new InvalidMongoId422('Invalid mongo id');
    return this.model.findById({ _id: id });
  }

  public async updateById(
    id: string,
    obj: Partial<T>,
  ): Promise<ApplyBasicQueryCasting<Models>> {
    if (!isValidObjectId(id)) throw new InvalidMongoId422('Invalid mongo id');
    return this.model.findByIdAndUpdate(id, { ...obj }, { new: true });
  }
}

export default AbstractODM;