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
    var BlogDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BlogDetailComponent = (function () {
                function BlogDetailComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.blogItems = [
                        { "id": 1, "title": "Blog Title 1", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 2, "title": "Blog Title 2", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 3, "title": "Blog Title 3", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 4, "title": "Blog Title 4", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 5, "title": "Blog Title 5", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 6, "title": "Blog Title 6", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 7, "title": "Blog Title 7", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 8, "title": "Blog Title 8", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 9, "title": "Blog Title 9", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 10, "title": "Blog Title 10", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 11, "title": "Blog Title 11", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 12, "title": "Blog Title 12", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 13, "title": "Blog Title 13", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 14, "title": "Blog Title 14", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 15, "title": "Blog Title 15", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                        { "id": 16, "title": "Blog Title 16", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
                    ];
                }
                BlogDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = Number(this._routeParams.get('id'));
                    this.blog = this.blogItems.find(function (x) { return x.id === _this.id; });
                };
                BlogDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'blog-detail',
                        templateUrl: 'app/blogDetail/blogDetail.component.html',
                        styleUrls: ['app/blogDetail/blogDetail.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], BlogDetailComponent);
                return BlogDetailComponent;
            }());
            exports_1("BlogDetailComponent", BlogDetailComponent);
        }
    }
});
//# sourceMappingURL=blogDetail.component.js.map