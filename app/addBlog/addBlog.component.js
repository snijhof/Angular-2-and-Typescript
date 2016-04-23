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
    var EscapeHtmlPipe, AddBlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EscapeHtmlPipe = (function () {
                function EscapeHtmlPipe() {
                }
                EscapeHtmlPipe.prototype.transform = function (value, args) {
                    if (args === void 0) { args = []; }
                    return value;
                };
                EscapeHtmlPipe = __decorate([
                    core_1.Pipe({ name: 'escapeHtml', pure: false }), 
                    __metadata('design:paramtypes', [])
                ], EscapeHtmlPipe);
                return EscapeHtmlPipe;
            }());
            exports_1("EscapeHtmlPipe", EscapeHtmlPipe);
            AddBlogComponent = (function () {
                function AddBlogComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.blog = {
                        "id": 1, "body": "", "title": "Blog Title 1", "text": "", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7)
                    };
                }
                AddBlogComponent.prototype.onSubmit = function () {
                    console.log("joepie");
                };
                ;
                AddBlogComponent.prototype.normalText = function () {
                };
                ;
                AddBlogComponent.prototype.boldText = function () {
                };
                ;
                AddBlogComponent.prototype.italicText = function () {
                };
                ;
                AddBlogComponent.prototype.alignLeft = function () {
                };
                ;
                AddBlogComponent.prototype.alignCenter = function () {
                };
                ;
                AddBlogComponent.prototype.alignRight = function () {
                };
                ;
                AddBlogComponent.prototype.alignJustify = function () {
                };
                ;
                AddBlogComponent.prototype.toList = function () {
                };
                ;
                AddBlogComponent.prototype.indentLeft = function () {
                };
                ;
                AddBlogComponent.prototype.indentRight = function () {
                };
                ;
                AddBlogComponent.prototype.addUrl = function () {
                };
                ;
                AddBlogComponent.prototype.addImage = function () {
                };
                ;
                AddBlogComponent.prototype.addVideo = function () {
                };
                ;
                AddBlogComponent = __decorate([
                    core_1.Component({
                        selector: 'add-blog',
                        templateUrl: 'app/addBlog/addBlog.component.html',
                        styleUrls: ['app/addBlog/addBlog.component.css'],
                        pipes: [EscapeHtmlPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], AddBlogComponent);
                return AddBlogComponent;
            }());
            exports_1("AddBlogComponent", AddBlogComponent);
        }
    }
});
//# sourceMappingURL=addBlog.component.js.map