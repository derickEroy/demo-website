import { userSchema } from 'src/infrastructure/validators';
import { Email, Password } from 'src/domain/valueObjects';
import { BaseEntity } from 'src/domain/entities';
import type { IDocumentExtensions, IRawUser, IUser } from 'src/domain/types';

export class User extends BaseEntity<IUser> {
    email: Email;
    password: Password;

    constructor(data: IRawUser & Partial<IDocumentExtensions>) {
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