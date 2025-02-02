import { Hasher } from '../../infrastructure/providers/Hasher';

export class Password {
    private _hasher = new Hasher();

    constructor(private _password: string) {}

    get value() {
        return this._password;
    }

    hash() {
        return this._password = this._hasher.hash(this.value);
    }

    compare(str: string) {
        return this._hasher.compare(str, this.value);
    }
}