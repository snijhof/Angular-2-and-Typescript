import { Component, OnDestroy, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

export class BlogItem {
    id: number;
    title: string;
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
        { "id": 1, "title": "Blog Title 1", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 2, "title": "Blog Title 2", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 3, "title": "Blog Title 3", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 4, "title": "Blog Title 4", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 5, "title": "Blog Title 5", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 6, "title": "Blog Title 6", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 7, "title": "Blog Title 7", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 8, "title": "Blog Title 8", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 9, "title": "Blog Title 9", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 10, "title": "Blog Title 10", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 11, "title": "Blog Title 11", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 12, "title": "Blog Title 12", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 13, "title": "Blog Title 13", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 14, "title": "Blog Title 14", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 15, "title": "Blog Title 15", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 16, "title": "Blog Title 16", "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
    ];
    
    onSelect(blogItem: BlogItem) { 
        this._router.navigate(['BlogDetail', {id: blogItem.id}]);
    }
}