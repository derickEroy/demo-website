import { Request, Response, NextFunction } from 'express';
import { HttpRequest } from 'src/presentation/http/[exports]';
import type { IController, TRequestProps } from 'src/domain/types/[exports]';

export function expressAdapter(service: IController<TRequestProps, unknown>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const httpRequest = new HttpRequest(req);
            
        const { httpCode, body, sessionData } = await service.execute(httpRequest);

        if (sessionData) {
            Object.assign(req.session, sessionData);
        }

        res.status(httpCode).json(body);
    }
}