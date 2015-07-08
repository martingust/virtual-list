import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'phone-list'], name: 'phone-list'  moduleId: './phone-list',     nav: false, title:'Contacts' }
    ]);

    this.router = router;
  }
}
