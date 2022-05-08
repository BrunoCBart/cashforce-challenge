import * as express from 'express'
import OrderController from '../controllers/OrderController'

const orderRoutes: express.Router = express.Router()


orderRoutes.get('/', OrderController.getAllOrders)

export default orderRoutes

