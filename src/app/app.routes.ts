import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Home } from './home/home';
import { DetallesNovela } from './detalles-novela/detalles-novela';
import { MuroFanarts } from './muro-fanarts/muro-fanarts';
import { MuroNovela } from './muro-novela/muro-novela';
import { DetallesFanart } from './detalles-fanart/detalles-fanart';
import { PantallaJuego } from './pantalla-juego/pantalla-juego';
import { PerfilJugador } from './perfil-jugador/perfil-jugador';
import { PanelDesarrollador } from './panel-desarrollador/panel-desarrollador';
import { PublicarNovela } from './publicar-novela/publicar-novela';
import { PanelAdministracion } from './panel-administracion/panel-administracion';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'registro',
    component: Registro
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'biblioteca',
    component: Home
  },
  {
    path: 'detalles-novela',
    component: DetallesNovela
  },

  {
  path: 'panel-administracion',
  component: PanelAdministracion
},

  { path: 'publicar-novela',
    component: PublicarNovela },

  {
  path: 'panel-desarrollador',
  component: PanelDesarrollador
},
{
  path: 'perfil-jugador',
  component: PerfilJugador
},
  {
  path: 'pantalla-juego',
  component: PantallaJuego
},

  {
    path: 'muro-fanarts',
    component: MuroFanarts
  },
  {
    path: 'muro-novela/:novela',
    component: MuroNovela
  },
  {
    path: 'detalles-fanart',
    component: DetallesFanart
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
