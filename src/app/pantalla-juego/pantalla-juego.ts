
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-pantalla-juego',
  styleUrl: './pantalla-juego.css',
  templateUrl: './pantalla-juego.html',
})
export class PantallaJuego implements AfterViewInit, OnDestroy {

  @ViewChild('carrusel') carrusel!: ElementRef<HTMLDivElement>;

  private movimientoAutomatico: ReturnType<typeof setInterval> | undefined;
  private tiempoReinicio: ReturnType<typeof setTimeout> | undefined;

  ngAfterViewInit() {
    this.iniciarCarrusel();
  }

  iniciarCarrusel() {

    this.movimientoAutomatico = setInterval(() => {

      const elemento = this.carrusel.nativeElement;

      if (elemento.scrollLeft + elemento.clientWidth >= elemento.scrollWidth - 5) {

        elemento.scrollTo({
          left: 0,
          behavior: 'smooth'
        });

      } else {

        elemento.scrollBy({
          left: 250,
          behavior: 'smooth'
        });

      }

    }, 3000);

  }

  detenerCarrusel() {

    clearInterval(this.movimientoAutomatico);
    clearTimeout(this.tiempoReinicio);

  }

  reanudarCarrusel() {

    this.detenerCarrusel();

    this.tiempoReinicio = setTimeout(() => {
      this.iniciarCarrusel();
    }, 5000);

  }

  moverCarrusel(direccion: number) {

    const elemento = this.carrusel.nativeElement;

    elemento.scrollBy({
      left: direccion * 250,
      behavior: 'smooth'
    });

    this.reanudarCarrusel();

  }

  ngOnDestroy() {

    clearInterval(this.movimientoAutomatico);
    clearTimeout(this.tiempoReinicio);

  }

}
