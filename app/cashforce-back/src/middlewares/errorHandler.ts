import { NextFunction, Request, Response } from 'express'

export default (err: Error, req: Request, res: Response, _next: NextFunction) => {
  return res.status(500).json({ error: `Error ${err.message}` });
}