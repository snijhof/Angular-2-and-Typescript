import { Component, OnDestroy, OnInit, Pipe, PipeTransform } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { NgForm } from 'angular2/common';
import { BlogItem } from '../dashboard/dashboard.component';

@Pipe({name: 'escapeHtml', pure: false}) 
export class EscapeHtmlPipe implements PipeTransform {
    transform (value: any, args: any[] = []) {
        return value;
    }
}

@Component({
    selector: 'add-blog',
    templateUrl: 'app/addBlog/addBlog.component.html',
    styleUrls: ['app/addBlog/addBlog.component.css'],
    pipes: [EscapeHtmlPipe]
})

export class AddBlogComponent {
    
    blog: BlogItem = {
        "id": 1, "body": "", "title": "Blog Title 1", "text": "", "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7)
    }
    
    constructor(
        private _router:Router,
        private _routeParams:RouteParams) {}
        
    onSubmit() {
        console.log("joepie");
    };
    
    normalText() {
        
    };
    
    boldText() {
        
    };
    
    italicText() {
        
    };
    
    alignLeft() {
        
    };
    
    alignCenter() {
        
    };
    
    alignRight() {
        
    };
    
    alignJustify() {
        
    };
    
    toList() {
        
    };
    
    indentLeft() {
        
    };
    
    indentRight() {
        
    };
    
    addUrl() {
        
    };
    
    addImage() {
        
    };
    
    addVideo() {
        
    };
}