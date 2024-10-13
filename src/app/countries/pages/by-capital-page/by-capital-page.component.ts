import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  /**
   * El ByCapitalPageComponent es el componente principal encargado de manejar la funcionalidad de búsqueda por capitales. 
   * Utiliza el componente hijo SearchBoxComponent para recibir un término de búsqueda ingresado por el usuario, y luego lo procesa
   * El usuario escribe el nombre de una capital en el campo de búsqueda y presiona Enter.
   * El componente hijo SearchBoxComponent emite el valor ingresado.
   * El componente padre escucha el evento y llama al método searchByCapital(term).
   */

  /**
   * public countries: Country[]: Almacena los resultados de la búsqueda, es decir, la lista de países que coinciden con la capital buscada.
   * Tipo: Country[] (una lista de objetos que implementan la interfaz Country).
   */
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';
  
  constructor(
    private countriesServices: CountriesService
  ){}
  
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  /**
   * Este método se invoca cuando el usuario ingresa el nombre de una capital y presiona Enter. Llama al servicio CountriesService para realizar 
   * la búsqueda de países por capital y actualiza la propiedad countries con los resultados obtenidos.
   * @param term El término de búsqueda (nombre de la capital) ingresado por el usuario.
   */
  searchByCapital( term: string): void {
    this.isLoading = true;
    this.countriesServices.searchCapital( term )
    .subscribe( countries =>{
      this.countries = countries;
      this.isLoading = false;
      });
  }
}
