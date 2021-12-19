import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faHome,
  faShoppingCart,
  faSearch,
  faSign,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  faHome = faHome;
  faCar = faCar;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  show = false;
  faSignInAlt = faSignInAlt;
  ngOnInit(): void {}
  src() {
    this.show = !this.show;
  }
}
