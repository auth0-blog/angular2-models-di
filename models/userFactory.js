var user_1 = require('./user');
var UserFactory = (function () {
    function UserFactory() {
    }
    UserFactory.prototype.create = function (userInfo) {
        return new user_1.User(userInfo);
    };
    return UserFactory;
})();
exports.UserFactory = UserFactory;
