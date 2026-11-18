
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-muro-novela',
  styleUrl: './muro-novela.css',
  templateUrl: './muro-novela.html',
})
export class MuroNovela {

  public nombreNovela = '';

  constructor(private route: ActivatedRoute) {

    this.nombreNovela = this.route.snapshot.paramMap.get('novela') || '';

  }

}

