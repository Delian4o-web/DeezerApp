import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tracklist } from "../models/tracklist";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Track } from "../models/track";

@Injectable({
  providedIn: "root"
})
export class TracklistService {
  constructor(private http: HttpClient) {}

  getTrackList(artistID?: number): Observable<Track[]> {
    return this.http.get<Track[]>(
      `${environment.apiUri}/artist/${artistID}/top?limit=5`
    );
  }
}
