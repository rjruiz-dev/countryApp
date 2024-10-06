import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    /**
     * El servicio ServiceNameService es responsable de interactuar con una API externa para obtener información de países según el nombre de su capital. 
     * Utiliza el módulo HttpClient de Angular para hacer solicitudes HTTP y devuelve un observable de los resultados.
     */

    // apiUrl: Almacena la URL base de la API https://restcountries.com/v3.1, que es utilizada para hacer las solicitudes HTTP.
    private apiUrl: string = 'https://restcountries.com/v3.1'
    constructor(private http: HttpClient) { }

    /**
     * Este método realiza una solicitud HTTP GET a la API restcountries.com para buscar países por el nombre de la capital ingresado. 
     * Devuelve un Observable que emite una lista de objetos Country (definidos en la interfaz Country).
     * @param term: El nombre de la capital por la que se quiere buscar. 
     * @returns Devuelve un Observable<Country[]> que emite una lista de países correspondientes a la capital buscada.
     */
    searchCapital( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }capital/${ term }` 
        return this.http.get<Country[]>( url );
    }
    
}