import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable, range } from "rxjs";
import { environment } from "src/environments/environment";
import { Artist } from "../models/artist";
import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";
import { tap, catchError, map } from "rxjs/operators";
import { Artists } from "../models/artists";

@Injectable({
  providedIn: "root"
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getArtists(query?: number): Observable<Artist> {
    return this.http.get<Artist>(`${environment.apiUri}/artist/${query}`);
  }

  searchArtists(term?: string): Observable<Artist[]> {
    console.log("Search Item : " + `${term}`);

    return this.http
      .get<any>(`${environment.apiUri}/search/artist?q=${term}`)
      .pipe(map(x => x.data));
  }
}
