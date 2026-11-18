
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  constructor(public router: Router) {}

}
