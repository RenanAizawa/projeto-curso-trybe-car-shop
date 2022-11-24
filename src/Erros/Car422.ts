export default class InvalidMongoId422 extends Error {
  public status: number;
  constructor(message: string) {
    super(message);
    this.status = 422;
  }
}