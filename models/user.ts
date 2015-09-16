export class User {

  name: string;
  email: string;
  rating: number;

  constructor(userInfo:any) {

    this.name = userInfo.name;
    this.email = userInfo.email;
    this.rating = this.calculateRating(userInfo);

  }

  // Method to calculate the user's points
  private calculateRating(userInfo) {
    var rating = 0;
    userInfo.javascript ? rating+= 30 : rating;
    userInfo.ruby ? rating+= 20 : rating;
    userInfo.php ? rating+= 50 : rating;
    return rating;
  }

  save() {
    // HTTP request would go here
    console.log(this.name, this.email, this.rating);
  }

}