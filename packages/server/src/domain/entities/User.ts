import { userSchema } from '../../infrastructure/validators/schemas';
import { Email } from '../valueObjects/Email';
import { Password } from '../valueObjects/Password';
import { BaseEntity } from './_bases';
import type { IUser } from '../types/documents';
import type { TOptionalDocumentExtensions } from '../types/utilities';

export class User extends BaseEntity<IUser> {
    email: Email;
    password: Password

    constructor(data: TOptionalDocumentExtensions<IUser>) {
        super(data, userSchema);

        this.email = new Email(data.email);
        this.password = new Password(data.password);

        this.validate();
    }

    validate() {
        super.validate(this.toObject());
    }

    toObject() {
        return {
            ...this,
            email: this.email.value,
            password: this.password.value
        }
    }
}