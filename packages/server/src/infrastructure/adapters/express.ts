import { Request, Response, NextFunction } from 'express';
import { HttpRequest } from '../../presentation/http/HttpRequest';
import type { IController } from '../../domain/types/controllers';

export function expressAdapter(service: IController<unknown, unknown>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const httpRequest = new HttpRequest(req);
            
        const { httpCode, body, sessionData } = await service.execute(httpRequest);

        if (sessionData) {
            Object.assign(req.session, sessionData);
        }

        res.status(httpCode).json(body);
    }
}