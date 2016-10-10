import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { Link } from './shared/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MenuService ]
})
export class AppComponent {

  links: Array<Link>;

  constructor(private menuService: MenuService) {
    menuService.getItems()
      .then(data => {
        this.links = data.links;
      });
  }

  setActive(target) {
    this.links.forEach(link => {
      link.active = false;
      if (target.name === link.name) {
        link.active = true;
      }
    });
  }

}
