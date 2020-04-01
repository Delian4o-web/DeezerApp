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
  rndNumber = randomInt(21, 3000);
  artistCount: number;
  artists$: Observable<Artist[]>;
  private searchTerms = new Subject<string>();
  searchText;

  constructor(private artistService: ArtistsService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    for (
      let artistNo = this.rndNumber - 20;
      artistNo <= this.rndNumber;
      artistNo++
    ) {
      this.artistService.getArtists(artistNo).subscribe(x => {
        this.artists.push(x);
      });
      console.log(artistNo);
    }

    this.artists$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.artistService.searchArtists(term))
    );
  }
}
