import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent {
  carreras = [
    { name: 'Desarrollo de Software Multiplataforma', type: 'ti', image: 'assets/images/tics.jpg', showBusqueda: true, showFiltro: true },
    { name: 'Infraestructura de Redes Digitales', type: 'ti', image: 'assets/images/redes.jpg', showBusqueda: true, showFiltro: true},
    { name: 'Entornos Virtuales y Negocios Digitales', type: 'ti', image: 'assets/images/entornos.jpg', showBusqueda: true, showFiltro: true},
    { name: 'Diseño Digital', type: 'ti', image: 'assets/images/diseno.jpg', showBusqueda: true, showFiltro: true},
    { name: 'Contaduría', type: 'ea', image: 'assets/images/contaduria.jpg', showBusqueda: true, showFiltro: true},
    { name: 'Turismo', type: 'ea', image: 'assets/images/turismo.jpg', showBusqueda: true, showFiltro: true, pagina: 'turismo'},
    { name: 'Administración Área Capital Humano', type: 'ea', image: 'assets/images/admin.jpg', showBusqueda: true, showFiltro: true},
  ];

  selectedType: string = 'todos';
  selectedLevel: string;

  ngOnInit() {
    this.filterByType('todos');
  }

  openModal() {
    document.getElementById("filterModal").style.display = "flex";
  }

  closeModal() {
    document.getElementById("filterModal").style.display = "none";
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  searchCarreras(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.carreras.forEach(carrera => {
      if (carrera.name.toLowerCase().includes(searchValue)) {
        carrera.showBusqueda = true;
      } else {
        carrera.showBusqueda = false;
      }
    });
  }

  filterByType(type: string) {
    this.selectedType = type;
    this.carreras.forEach(carrera => {
      if (type === 'todos') {
        carrera.showFiltro = true;
      } else if (carrera.type === type) {
        carrera.showFiltro = true;
      } else {
        carrera.showFiltro = false;
      }
    });
  }


  // ...

  constructor(private router: Router) {}

  redirectToPage(carrera: string) {
    this.router.navigate(['/', carrera]);
  }
}
