import {User} from './user';

export class UserFactory {

  // Uses the User model to create a new User
  create(userInfo:any) {
    return new User(userInfo);
  }

}