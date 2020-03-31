import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable, range } from "rxjs";
import { environment } from "src/environments/environment";
import { Artist } from "../models/artist";
import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";
import { tap, catchError, map, mergeAll, toArray } from "rxjs/operators";
import { Artists } from "../models/artists";

@Injectable({
  providedIn: "root"
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getArtists(query?: number): Observable<Artist> {
    return this.http.get<Artist>(`${environment.apiUri}/artist/${query}`);
  }

  // getArtists(min: number, top: number): Observable<Artist[]> {
  //   return range(min, top).pipe(
  //     map(x => this.getArtist(x)),
  //     mergeAll(),
  //     toArray()
  //   );
  // }

  searchArtists(term?: string): Observable<Artist[]> {
    return this.http
      .get<any>(`${environment.apiUri}/search/artist?q=${term}`)
      .pipe(map(x => x.data));
  }
}
