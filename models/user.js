var User = (function () {
    function User(userInfo) {
        this.name = userInfo.name;
        this.email = userInfo.email;
        this.rating = this.calculateRating(userInfo);
    }
    User.prototype.calculateRating = function (userInfo) {
        var rating = 0;
        userInfo.javascript ? rating += 30 : rating;
        userInfo.ruby ? rating += 20 : rating;
        userInfo.php ? rating += 50 : rating;
        return rating;
    };
    User.prototype.save = function () {
        console.log(this.name, this.email, this.rating);
    };
    return User;
})();
exports.User = User;
