import * as express from 'express'
import * as cors from 'cors'
import { orderRoutes } from './routes'
import { errorHandler } from './middlewares'
class App {
  public app: express.Express

  constructor () {
    this.app = express()
    this.config()
    this.routes()
    this.app.use(errorHandler)
  }

  private config () {
    this.app.use(express.json())
    this.app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
    }))
  }

  private routes ():void {
    this.app.use('/orders', orderRoutes)
  }

  public async start (PORT: number): Promise<void> {
    this.app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
  }
}

export const { app } = new App()

export default new App()
