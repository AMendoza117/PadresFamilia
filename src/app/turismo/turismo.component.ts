import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css']
})
export class TurismoComponent implements OnInit {

  contenido: string = 'Perfil'; // Perfil, Competencias, Ocupaciones

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  activar(contenido: string){
    this.contenido = contenido;
  }



  regresarCarreras() {
    this.router.navigate(['/carreras']);
  }

  descargarCur(){
    window.open("assets/images/TurismoPlanDeEstudios.pdf", "_blank");
  }
}
