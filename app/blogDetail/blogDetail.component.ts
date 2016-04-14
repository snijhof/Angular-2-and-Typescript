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
    commentsOpened: boolean;
    
    constructor(
        private _router:Router,
        private _routeParams:RouteParams) {}
        
    ngOnInit() {
        this.likes = 0;
        this.shared = 0;
        this.commentsOpened = false;
        this.id = Number(this._routeParams.get('id'));
        this.blog = this.blogItems.find(x => x.id === this.id);
    }
    
    openComments() {
        this.commentsOpened = !this.commentsOpened;
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
    
    title = "Grumpy wizards make toxic brew for the evil Queen and Jack.";
    text: string[] = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id diam suscipit, consequat purus sit amet, gravida velit. In hac habitasse platea dictumst. Pellentesque posuere vehicula nunc. Cras varius mi vel elementum dignissim. Integer dolor urna, rhoncus id tellus eu, mattis finibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sed congue leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque et scelerisque mi, sed molestie massa. Fusce euismod sollicitudin dolor, eu laoreet nunc.",
        "Cras vehicula mollis sem, eu ultricies lorem dignissim gravida. Praesent eleifend faucibus posuere. Phasellus nec magna eu nulla laoreet convallis. Ut a quam non est lacinia faucibus. Suspendisse mattis ante id dolor pretium, in convallis risus laoreet. Nam commodo sit amet sem non pretium. Suspendisse fringilla tristique sem eget consequat. Sed magna sem, consectetur et pharetra non, cursus at nibh. Sed quis sem at nunc tempor ultrices sed quis justo. In volutpat condimentum porttitor. Sed erat odio, accumsan et fringilla et, luctus vitae turpis. Vivamus sit amet purus eget tortor efficitur ullamcorper a nec tortor. Praesent non elementum dolor, sed tempus massa. Suspendisse accumsan facilisis nulla. Suspendisse ex elit, malesuada et risus et, lacinia fringilla dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.", 
        "Sed hendrerit vestibulum arcu eget accumsan. Morbi blandit congue fermentum. Pellentesque ultricies condimentum orci, non consequat justo sodales sit amet. Suspendisse potenti. Donec scelerisque est in metus vehicula, a congue quam feugiat. Morbi vestibulum, augue quis aliquet sollicitudin, ante magna auctor justo, ac facilisis enim massa iaculis urna. Nulla tempor pharetra aliquam. Vestibulum at porta turpis. Mauris facilisis bibendum justo, a auctor elit tincidunt ac. Ut molestie felis ornare molestie mattis. Donec semper sodales enim eget tincidunt. Vivamus finibus dictum nunc sed semper.",
        "Donec quis nunc faucibus, tempus dui in, imperdiet augue. Proin nunc mi, laoreet vitae nibh sed, consequat rhoncus sapien. Nullam porttitor mi sit amet scelerisque ultricies. Maecenas elementum purus a ipsum finibus dapibus. Nam a mi nulla. Duis quam quam, elementum eget sollicitudin sit amet, interdum sed turpis. Etiam ultrices mauris in mauris faucibus efficitur. Nulla mattis nisi arcu, sit amet sodales erat gravida at. Mauris vulputate laoreet mauris, volutpat volutpat felis ultrices ac. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "Duis nec mollis arcu, et laoreet tellus. Cras ac elit a libero ultrices gravida sed sed urna. Donec pellentesque auctor faucibus. Ut a facilisis nisi. Vivamus vulputate volutpat tincidunt. Donec ut arcu metus. Nullam cursus metus at leo tincidunt tincidunt. Phasellus blandit ullamcorper lacus."
    ];
    
    blogItems: BlogItem[] = [
        { "id": 1, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 2, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 3, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 4, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 5, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 6, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 7, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 8, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 9, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 10, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 11, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 12, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 13, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 14, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 15, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
        { "id": 16, "title": this.title, "text": this.text, "author": "Sjoerd Nijhof", "publication": new Date(2016, 4, 7) },
    ];
}