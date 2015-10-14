export interface UserConfig {
  name: string;
  email: string;
  rating: number;
  javascript: boolean;
  ruby: boolean;
  php: boolean;
}

export class User {

  name: string;
  email: string;
  rating: number;

  constructor(user: UserConfig) {

    this.name = user.name;
    this.email = user.email;
    this.rating = this.calculateRating(user);

  }

  // Method to calculate the user's points
  private calculateRating(userInfo: UserConfig) {
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

  save() {
    // HTTP request would go here
    console.log(this.name, this.email, this.rating);
  }

  get() {
    console.log(this.name);
  }

}