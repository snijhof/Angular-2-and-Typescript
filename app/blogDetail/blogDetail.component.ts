import { Component, OnDestroy, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

@Component({
    selector: 'blog-detail',
    templateUrl: 'app/blogDetail/blogDetail.component.html',
    styleUrls: ['app/blogDetail/blogDetail.component.css']
})

export class BlogDetailComponent implements OnInit {
    
     constructor(
        private _router:Router,
        private _routeParams:RouteParams) {}
        
    ngOnInit() {
        let id = this._routeParams.get('id');
    }
}