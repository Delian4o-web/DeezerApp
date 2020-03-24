import { Component, OnInit, Input } from "@angular/core";
import { ArtistsService } from "../services/artists.service";
import { Artists } from "../models/artists";
import { Artist } from "../models/artist";

@Component({
  selector: "app-artist-search",
  templateUrl: "./artist-search.component.html",
  styleUrls: ["./artist-search.component.css"]
})
export class ArtistSearchComponent implements OnInit {
  @Input() artist: Artist;
  constructor() {}

  ngOnInit(): void {}
}
