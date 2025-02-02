export class Email {
    constructor(private _email: string) {}

    get value() {
        return this._email;
    }

    get domain() {
        return this._email.split('@')[0];
    }
}