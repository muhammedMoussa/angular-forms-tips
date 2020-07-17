import {IUser} from './user.model';

export class User implements IUser {
    id = new Date().toISOString();
    name = '';
    age = null;
    languageId = null;
    active = false;
}