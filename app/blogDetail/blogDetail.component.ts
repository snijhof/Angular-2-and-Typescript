import { Component, OnDestroy, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { BlogItem } from '../dashboard/dashboard.component';

@Component({
    selector: 'blog-detail',
    templateUrl: 'app/blogDetail/blogDetail.component.html',
    styleUrls: ['app/blogDetail/blogDetail.component.css']
})

export class BlogDetailComponent implements OnInit {
    id: number;
    blog: BlogItem;
    love: boolean;
    likes: number;
    shared: number;
    
    constructor(
        private _router:Router,
        private _routeParams:RouteParams) {}
        
    ngOnInit() {
        this.likes = 0;
        this.shared = 0;
        this.id = Number(this._routeParams.get('id'));
        this.blog = this.blogItems.find(x => x.id === this.id);
    }
    
    loveBlogPost() {
        if (this.love) {
            this.likes--;
            this.love = false;
        } else {
            this.likes++;
            this.love = true;
        }
    }
    
    share() {
        this.shared++;
    }
    
    blogItems: BlogItem[] = [
        { "id": 1, "title": "Grumpy wizards make toxic brew for the evil Queen and Jack.", "text": "This is the story from this awesome blog post.", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
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