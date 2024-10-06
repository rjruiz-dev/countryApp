import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  /**
   * El ByCapitalPageComponent es el componente principal encargado de manejar la funcionalidad de búsqueda por capitales. 
   * Utiliza el componente hijo SearchBoxComponent para recibir un término de búsqueda ingresado por el usuario, y luego lo procesa
   * El usuario escribe el nombre de una capital en el campo de búsqueda y presiona Enter.
   * El componente hijo SearchBoxComponent emite el valor ingresado.
   * El componente padre escucha el evento y llama al método searchByCapital(term).
   * @param term: El término de búsqueda ingresado (nombre de la capital).
   */
  searchByCapital( term: string): void {
    console.log('Desde ByCapitalPage');
    console.log({term});
  }
}
