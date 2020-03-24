import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Artist } from "../models/artist";
import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";

@Injectable({
  providedIn: "root"
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getArtists(query?: number): Observable<Artist> {
    return this.http.get<Artist>(`${environment.apiUri}/artist/${query}`);
  }

  searchArtists(term: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${environment.apiUri}/search?q=${term}`);
  }

  
}
