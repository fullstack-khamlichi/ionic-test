import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}

  test() {
    console.log('FAB is clicked');
  }

  share(site: string) {
    console.log('share wih ' + site);

  }

}
