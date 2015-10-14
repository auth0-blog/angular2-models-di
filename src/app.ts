import {Component, View, bootstrap, bind, FORM_DIRECTIVES, Inject} from 'angular2/angular2';
import {User, UserConfig} from './models/user';
import {UserFactory} from './models/userFactory';

@Component({
  selector: 'users'
})
@View({
  // Form directives to be used in the template
  directives: [FORM_DIRECTIVES],
  template: `
    <form role="form" #form="form" (ng-submit)="submit(form.value)">
      <input type="text" placeholder="Enter your name" ng-control="name">
      <input type="text" placeholder="Enter your email" ng-control="email">
      <h3>Languages</h3>
      <input type="checkbox" ng-control="javascript">JavaScript
      <input type="checkbox" ng-control="ruby">Ruby
      <input type="checkbox" ng-control="php">PHP
      <button>Submit</button>
    </form>
  `
})

class UsersAppComponent {

  userFactory: UserFactory;
  user: any;
  
  constructor(userFactory: UserFactory) {  
    this.userFactory = userFactory;
  }

  submit(userInfo: UserConfig) {
    this.user = this.userFactory.create(userInfo);
    this.user.save();
  }

  getUser() {
    this.user.get();
  }
}

bootstrap(UsersAppComponent, [UserFactory]);