import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-publicidad',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './publicidad.component.html',
  styleUrl: './publicidad.component.css'
})

export class PublicidadComponent {

  constructor(private ruter:Router){}
  images: string[] = [
    '../../assets/_publicidades/concierto_pop.png',
    '../../assets/_publicidades/concierto_rock.webp',
    '../../assets/_publicidades/concierto_tour.jpg',
    '../../assets/_publicidades/concierto_wizink.png',
    '../../assets/_publicidades/concierto_orquesta.jpg'
  ];
  currentSlide = 0;

  changeSlide(n: number): void {
    this.currentSlide = (this.currentSlide + n + this.images.length) % this.images.length;
  }

  setCurrentSlide(index: number): void {
    this.currentSlide = index;
  }
  clicNovedades(){
    this.ruter.navigate(['/masnuevas']);
  }
  clickMasDescargadas(){
    this.ruter.navigate(['/masdescargadas']);

  }
  clickTodasLasCanciones(){
    this.ruter.navigate(['/canciones']);
  }

}
