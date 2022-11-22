import ITransport from './ITrasport';

export default interface ICar extends ITransport {
  doorsQty: number;
  seatsQty: number;
}