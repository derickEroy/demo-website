import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import http from 'http';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import store from 'connect-mongo';
import { port, secretKey } from '@configs';
import { client as dbClient, connect as dbConnect } from '@infrastructure/databases';
import { userRouter, chatRouter } from '@infrastructure/routers';
import {  globalErrorHandler } from '@infrastructure/middlewares';

(async () => {
    const app = express();

    app.use(express.json());
    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }));
    app.use(session({
        secret: secretKey,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: true
        },
        store: store.create({ client: dbClient })
    }));
    app.use('/users', userRouter);
    app.use('/chats', chatRouter);
    app.use(globalErrorHandler);

    const server = http.createServer(app);

    await dbConnect();

    server.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
})();