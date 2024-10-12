import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})

  /**
   * SearchBoxComponent es un componente reutilizable que consiste en un campo de entrada de texto (input). 
   * Permite al usuario ingresar texto y, al presionar la tecla Enter, emite el valor ingresado al componente padre a través de un evento.
   */
export class SearchBoxComponent implements OnInit, OnDestroy{  
  /**
   * Tipo especial de observable
   */
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  /**
   * El observable emite un valor
   * Llega al pipe, el pipe tiene un debounceTime(1000) que es nuestro operador
   * El operador espera 1 seg, para ver si no recibe mas valores, por cada valor recibido espera 1 seg y no emita nada
   * Hasta que el usuario deja de escribir por 1 seg entonces recien ahi le manda el valor al subscribe
   */
  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      console.log('debouncer value: ', value);
      this.onDebounce.emit( value );
    })
  }

  /**
   * Se manda a llamar cuando esta instancia del componente es destruida
   * Es necesario hacerlo excepto para las peticones http
   */
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  /**
   * Este método se invoca cuando el usuario presiona la tecla Enter. Emite el valor del campo de entrada usando el evento onValue.
   * @param value: El valor actual del campo de texto.
   */
  emitValue(value: string): void {    
    this.onValue.emit(value);
  }

  /**
   * Espera a que el usuario deje de escribir para lanzar la peticion
   * @param searchTerm: El termino de busqueda actual del campo de texto.
   */
  onKeyPress( searchTerm: string) {
    // console.log(searchTerm);
    this.debouncer.next( searchTerm );
  }
}
