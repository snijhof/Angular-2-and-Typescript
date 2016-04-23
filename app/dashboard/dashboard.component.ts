import { Component, OnDestroy, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

export class BlogItem {
    id: number;
    title: string;
    body: string;
    text: string[];
    author: string;
    publication: Date;
}

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent {
    
    constructor(private _router: Router) { }
    
    selectedBlogItem: BlogItem;
    text: string[] = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id diam suscipit, consequat purus sit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id diam suscipit, consequat purus sit"
    ];
    blogItems: BlogItem[] = [
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
    
    onSelect(blogItem: BlogItem) { 
        this._router.navigate(['BlogDetail', {id: blogItem.id}]);
    }
    
    addBlog() { 
        this._router.navigate(['AddBlog']);
    }
}