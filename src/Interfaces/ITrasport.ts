export default interface ITransport {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
}