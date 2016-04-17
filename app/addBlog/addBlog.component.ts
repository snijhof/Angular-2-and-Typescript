import { Component, OnDestroy, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { NgForm } from 'angular2/common';
import { BlogItem } from '../dashboard/dashboard.component';

@Component({
    selector: 'add-blog',
    templateUrl: 'app/addBlog/addBlog.component.html',
    styleUrls: ['app/addBlog/addBlog.component.css']
})

export class AddBlogComponent {
        
    constructor(
        private _router:Router,
        private _routeParams:RouteParams) {}
        
    onSubmit() {
        console.log("joepie");
        this._router.navigate(['AddBlog']);
    };
}