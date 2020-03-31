import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Artist } from "../models/artist";
import { ArtistsService } from "../services/artists.service";
import { Artists } from "../models/artists";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  artists$: Observable<Artist[]>;
  private searchTerms = new Subject<string>();
  searchText;
  constructor(private artistService: ArtistsService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.artists$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.artistService.searchArtists(term))
    );
  }
}
