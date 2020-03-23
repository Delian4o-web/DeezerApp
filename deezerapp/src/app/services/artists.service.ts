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

  getArtists(query?: string): Observable<Artist> {
    return this.http.get<Artist>(
      `${environment.apiUri}/search/artist${query ? "?q=${query}" : ""}`
    );
  }
}
