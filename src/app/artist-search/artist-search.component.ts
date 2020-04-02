import { Component, OnInit } from "@angular/core";
import { ArtistsService } from "../services/artists.service";
import { Artists } from "../models/artists";
import { Artist } from "../models/artist";
import { randomInt } from "../utils/random-num";
import { ActivatedRoute } from "@angular/router";
import { ThousandSuffPipe } from "../pipes/thousand-suff.pipe";
import { Observable, Subject } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  count
} from "rxjs/operators";

@Component({
  selector: "app-artist-search",
  templateUrl: "./artist-search.component.html",
  styleUrls: ["./artist-search.component.css"]
})
export class ArtistSearchComponent implements OnInit {
  artists: Artist[] = [];
  rndNumber = randomInt(21, 3000) - 20;

  constructor(private artistService: ArtistsService) {}

  ngOnInit(): void {
    for (
      let artistNo = this.rndNumber;
      artistNo <= this.rndNumber + 20;
      artistNo++
    ) {
      this.artistService.getArtists(artistNo).subscribe(x => {
        this.artists.push(x);
      });
    }
  }
}
