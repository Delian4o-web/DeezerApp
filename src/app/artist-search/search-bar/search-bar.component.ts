import { Component, OnInit } from "@angular/core";
import { ArtistsService } from "src/app/services/artists.service";
import { Subject, Observable } from "rxjs";
import { Artist } from "src/app/models/artist";
import { Pipe, PipeTransform } from "@angular/core";
import { ThousandSuffPipe } from "../../pipes/thousand-suff.pipe";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  count
} from "rxjs/operators";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
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
