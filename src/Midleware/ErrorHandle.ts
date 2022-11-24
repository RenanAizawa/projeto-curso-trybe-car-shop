export default class ErrorHandler {
  public static handle(error: any, req: any, res: any) {
    return res.status(error.status).json({ message: error.message });
  }
}