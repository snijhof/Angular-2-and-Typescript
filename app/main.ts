import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [])
    .then(succes => console.log('Bootstrap succes'))
    .catch(error => console.log(error));