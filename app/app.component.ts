import { Component, provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogDetailComponent } from './blogDetail/blogDetail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'bloggin-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetailComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent,
  },
])

export class AppComponent {
}