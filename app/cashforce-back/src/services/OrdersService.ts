import IOrder  from '../interfaces/Order.interface'

import Order from '../database/models/Order'
import Buyer from '../database/models/Buyer'
import Provider from '../database/models/Provider'

export default class OrdersService {

  public static async getAllOrders(): Promise<IOrder[]> {
    const orders = await Order.findAll(
      {include: [
        {model: Buyer, as: 'buyer'},
        {model: Provider, as: 'provider'}
      ]})
    return orders as IOrder[]
  }
}
