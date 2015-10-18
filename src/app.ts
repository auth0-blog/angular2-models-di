import {Component, View, bootstrap, bind, FORM_DIRECTIVES, Inject} from 'angular2/angular2';
import {User, UserConfig} from './models/user';

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
      <br />
      <button>Submit</button>
    </form>
    <button (click)="getUser()">Get User</button>
  `
})

class UsersAppComponent {

  constructor() {  

  }

  submit(userInfo: UserConfig) {
      // We instantiate the user class.
      let user = new User();
      user.name = userInfo.name;
      user.email = userInfo.email;
      user.rating = this.calculateRating(userInfo);
      // This would be HTTP request
      console.log(user);
  }

  getUser() {
    // This would be an http request
    let user = this.getUserFromRequest();
    console.log(user);
  }

  getUserFromRequest() {
    let user = new User();
    user.name = "Gonto";
    user.email = "gonto@auth0.com";
    user.rating = 50;
    return user;
  }

  // Method to calculate the user's points
  calculateRating(userInfo: User) {
    var rating = 0;
    if(userInfo.javascript) {
      rating += 30;
    }
    if(userInfo.ruby) {
      rating += 20;
    }
    if(userInfo.php) {
      rating += 50;
    }
    return rating;
  }
}

bootstrap(UsersAppComponent, []);