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
  
  constructor(@Inject(User) User) {  
    this.user = User;
  }
}

// The UserFactory can be bound to another name, in this case User
bootstrap(UsersAppComponent, [bind(User).toClass(UserFactory)]);