/// <reference path="typings/_custom.d.ts" />

import {Component, View, bootstrap, bind, FORM_DIRECTIVES} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {User} from 'models/user';
import {UserFactory} from 'models/userFactory';

@Component({
  selector: 'users'
})
@View({
  // Form directives to be used in the template
  directives: [FORM_DIRECTIVES],
  templateUrl: 'userTemplate.html'
})

class UsersAppComponent {
  
  constructor(@Inject(UserFactory) UserFactory) {  
    this.UserFactory = UserFactory;
  }

  submit(userInfo) {
    this.user = this.UserFactory.create(userInfo);
    this.user.save();
  }

  getUser() {
    this.user.get();
  }
}

bootstrap(UsersAppComponent, [UserFactory]);