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
    console.log("Sending user to server", this);
  }

  public static GetByName(name: String) {
    // HTTP request would go here
    return new User({
      name: 'Gonto',
      email: 'gonto@auth0.com',
      javascript: true,
      ruby: true,
      rating: 42,
      php: false
    });
  }

}