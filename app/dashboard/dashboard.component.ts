import { Component, OnDestroy, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'bloggin-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnDestroy, OnInit {
    private _dbResetSubscription: Subscription<any>;
    
    constructor(private _router: Router) {}
}