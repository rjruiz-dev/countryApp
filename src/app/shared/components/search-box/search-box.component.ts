import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  /**
   * SearchBoxComponent es un componente reutilizable que consiste en un campo de entrada de texto (input). 
   * Permite al usuario ingresar texto y, al presionar la tecla Enter, emite el valor ingresado al componente padre a través de un evento.
   */
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  /**
   * Este método se invoca cuando el usuario presiona la tecla Enter. Emite el valor del campo de entrada usando el evento onValue.
   * @param value: El valor actual del campo de texto.
   */
  emitValue(value: string): void {    
    this.onValue.emit(value);
  }
}
