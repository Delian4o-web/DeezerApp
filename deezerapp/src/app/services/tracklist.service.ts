import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tracklist } from "../models/tracklist";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class TracklistService {
  constructor(private http: HttpClient) {}

  getTrackList(artistID?: number): Observable<Tracklist> {
    console.log(
      this.http.get<Tracklist>(
        `${environment.apiUri}/artist/${artistID}/top?limit=5`
      )
    );
    return this.http.get<Tracklist>(
      `${environment.apiUri}/artist/${artistID}/top?limit=5`
    );
  }
}
