import {RequestHandler} from 'express';

const unless = (excludePaths: string[], middleware: RequestHandler): RequestHandler =>
  (req, res, next) =>
    (excludePaths.includes(req.path) ? next() : middleware(req, res, next));

export default unless;
