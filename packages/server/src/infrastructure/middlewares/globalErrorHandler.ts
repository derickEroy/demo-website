import { InternalError } from 'src/presentation/errorObjects/[exports]';
import type { Request, Response, NextFunction } from 'express';

export function globalErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).json(new InternalError(err.message));
}