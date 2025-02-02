export interface IHasher {
    hash(str: string, salt?: number): string;
    compare(str: string, hash: string): boolean;
}