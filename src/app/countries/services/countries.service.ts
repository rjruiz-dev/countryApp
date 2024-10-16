import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {
    /**
     * El servicio CountriesService es responsable de interactuar con una API externa para obtener información de países según el nombre de su capital. 
     * Utiliza el módulo HttpClient de Angular para hacer solicitudes HTTP y devuelve un observable de los resultados.
     */

    // apiUrl: Almacena la URL base de la API https://restcountries.com/v3.1, que es utilizada para hacer las solicitudes HTTP.
    private apiUrl: string = 'https://restcountries.com/v3.1';
    
    // Objeto
    public cacheStore: CacheStore = {
        // necesito grabar el termino de busqueda y los countries que pordujo el termino de busqueda
        byCapital:   { term: '', countries: [] }, 
        byCountries: { term: '', countries: [] }, 
        byRegion:    { region: '', countries: [] } 
    }
    
    
    constructor(private http: HttpClient) { 
        this.loadFromLocalStorage();
    }

    private saveToLocalStorage(){
        localStorage.setItem('cacheStore', JSON.stringify( this.cacheStore ));
    }

    private loadFromLocalStorage(){
        if ( !localStorage.getItem('cacheStore') ) return;

        this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
    }

    private getCountriesRequest( url: string): Observable<Country[]>{
        return this.http.get<Country[]>( url )
        // pipe(): Permite aplicar operadores RxJS al observable resultante de la solicitud HTTP.
        .pipe(
            // Es un operador que intercepta cualquier error en la solicitud HTTP y retorna un observable que emite un array vacío (of([])) en lugar de propagar el error.
            catchError( () => of([]) ),
            // delay( 2000 )
        );
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null>{
        const url = `${ this.apiUrl }/alpha/${ code }`;
        return this.http.get<Country[]>( url )           
        .pipe( 
            map( countries => countries.length > 0 ? countries[0] : null ),               
                catchError(() => of(null))
        );
    }

    /**
     * Este método realiza una solicitud HTTP GET a la API restcountries.com para buscar países por el nombre de la capital ingresado. 
     * Devuelve un Observable que emite una lista de objetos Country (definidos en la interfaz Country).
     * @param term: El nombre de la capital por la que se quiere buscar. 
     * @returns Devuelve un Observable<Country[]> que emite que emite un array de objetos Country. 
     * Si no se encuentran resultados, el observable emitirá un array vacío.
     */
    searchCapital( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/capital/${ term }`;        
        return this.getCountriesRequest(url)
            .pipe(
                tap( countries => this.cacheStore.byCapital = { term, countries }),
                tap( () => this.saveToLocalStorage() ),
            );
    }

    searchCountry( term: string ): Observable<Country[]>{
        const url = `${ this.apiUrl }/name/${ term }`; 
        return this.getCountriesRequest(url)
            .pipe(
                tap( countries => this.cacheStore.byCountries = { term, countries }),
                tap( () => this.saveToLocalStorage() ),
            );
    }
    
    searchRegion( region: Region ): Observable<Country[]>{
        const url = `${ this.apiUrl }/region/${ region }`; 
        return this.getCountriesRequest(url)
            .pipe(
                tap( countries => this.cacheStore.byRegion = { region, countries }),
                tap( () => this.saveToLocalStorage() ),
            );
    }
}