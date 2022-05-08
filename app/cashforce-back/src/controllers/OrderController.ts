import { NextFunction, Request, Response } from 'express';
import OrdersService from '../services/OrdersService';


export default class OrderController {
  public static async getAllOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders = await OrdersService.getAllOrders()
      res.status(200).json(orders)
    } catch (error) {
      next(error)
    }
  }
}