import { Document, MongoClient } from 'mongodb';
import { dbName, dbUri } from 'src/configs/[exports]';

const client = new MongoClient(dbUri);

const connect = async () => await client.connect().then(() => console.log('Connected to MongoDB'));

const disconnect = async () => await client.close().then(() => console.log('Disconnected from MongoDB'));

const getDb = () => client.db(dbName);

const getCollection = <T extends Document>(name: string) => client.db(dbName).collection<T>(name);

export {
    client,
    connect,
    disconnect,
    getDb,
    getCollection
}