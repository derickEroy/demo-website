import bcryptjs from 'bcryptjs';
import type { IHasher } from '../../domain/types/providers';

export class Hasher implements IHasher {
    hash(str: string, salt?: number): string {
        return bcryptjs.hashSync(str, salt);
    }

    compare(str: string, hash: string): boolean {
        return bcryptjs.compareSync(str, hash);
    }
}