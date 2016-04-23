System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var BlogItem, DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BlogItem = (function () {
                function BlogItem() {
                }
                return BlogItem;
            }());
            exports_1("BlogItem", BlogItem);
            DashboardComponent = (function () {
                function DashboardComponent(_router) {
                    this._router = _router;
                    this.text = [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id diam suscipit, consequat purus sit",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id diam suscipit, consequat purus sit"
                    ];
                    this.blogItems = [
                        { "id": 1, "body": "1231", "title": "Blog Title 1", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 2, "body": "1231", "title": "Blog Title 2", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 3, "body": "1231", "title": "Blog Title 3", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 4, "body": "1231", "title": "Blog Title 4", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 5, "body": "1231", "title": "Blog Title 5", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 6, "body": "1231", "title": "Blog Title 6", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 7, "body": "1231", "title": "Blog Title 7", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 8, "body": "1231", "title": "Blog Title 8", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 9, "body": "1231", "title": "Blog Title 9", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 10, "body": "1231", "title": "Blog Title 10", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 11, "body": "1231", "title": "Blog Title 11", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 12, "body": "1231", "title": "Blog Title 12", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 13, "body": "1231", "title": "Blog Title 13", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 14, "body": "1231", "title": "Blog Title 14", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 15, "body": "1231", "title": "Blog Title 15", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 16, "body": "1231", "title": "Blog Title 16", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                    ];
                }
                DashboardComponent.prototype.onSelect = function (blogItem) {
                    this._router.navigate(['BlogDetail', { id: blogItem.id }]);
                };
                DashboardComponent.prototype.addBlog = function () {
                    this._router.navigate(['AddBlog']);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/dashboard/dashboard.component.html',
                        styleUrls: ['app/dashboard/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map