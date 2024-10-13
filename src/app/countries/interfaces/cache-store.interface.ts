import { Country } from "./country";
import { Region } from "./region.type";

// Defino el objeto en el cual va a tener el termino y lo paises
export interface CacheStore {
    byCapital:   TermCountries;
    byCountries: TermCountries;
    byRegion:    RegionCountries;
}

export interface TermCountries {
    term: string;
    countries: Country[];
}

export interface RegionCountries {
    region: Region;
    countries: Country[];
}
