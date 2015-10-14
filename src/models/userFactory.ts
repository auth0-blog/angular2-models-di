import {User, UserConfig} from './user';

export class UserFactory {

  // Uses the User model to create a new User
  create(userInfo: UserConfig) {
    return new User(userInfo);
  }

}