import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vuelos-app';
  
  menu = [
    {name:'Inicio',url:"#"},
    {name:'Mis vuelos',url:"#"},
    {name:'Contáctanos',url:"#"},
    {name:'Iniciar Sesión',url:'#'}
  ]
  roundTyps = [
   'Ida y vuelta',
    'Solo ida' 
  ]

  travelClass = [
    'Económica',
    'Premium'
  ]
}
