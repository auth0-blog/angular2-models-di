var User = (function () {
    function User(userInfo) {
        this.name = userInfo.name;
        this.email = userInfo.email;
        this.rating = this.calculateRating(userInfo);
    }
    User.prototype.calculateRating = function (userInfo) {
        var rating = 0;
        if (userInfo.javascript) {
            rating += 30;
        }
        if (userInfo.ruby) {
            rating += 20;
        }
        if (userInfo.php) {
            rating += 50;
        }
        return rating;
    };
    User.prototype.save = function () {
        console.log(this.name, this.email, this.rating);
    };
    User.prototype.get = function () {
        console.log(this.name);
    };
    return User;
})();
exports.User = User;
