/// <reference path="typings/_custom.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var di_1 = require('angular2/di');
var user_1 = require('models/user');
var userFactory_1 = require('models/userFactory');
var UsersAppComponent = (function () {
    function UsersAppComponent(User) {
        this.user = User;
    }
    UsersAppComponent = __decorate([
        angular2_1.Component({
            selector: 'users'
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES],
            templateUrl: 'userTemplate.html'
        }),
        __param(0, di_1.Inject(user_1.User)), 
        __metadata('design:paramtypes', [Object])
    ], UsersAppComponent);
    return UsersAppComponent;
})();
angular2_1.bootstrap(UsersAppComponent, [angular2_1.bind(user_1.User).toClass(userFactory_1.UserFactory)]);
