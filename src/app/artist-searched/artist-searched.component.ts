import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Artist } from "../models/artist";
import { Artists } from "../models/artists";
import { ArtistsService } from "../services/artists.service";

@Component({
  selector: "app-artist-searched",
  templateUrl: "./artist-searched.component.html",
  styleUrls: ["./artist-searched.component.css"]
})
export class ArtistSearchedComponent implements OnInit {
  artistSearched: string;
  artists: Artist[] = new Array();
  artist: Artist;
  artistList: Artists;
  constructor(
    private actRoute: ActivatedRoute,
    private artistService: ArtistsService
  ) {
    this.artistSearched = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.artistList = new Artists();
    this.artistService.searchArtists(this.artistSearched).subscribe(x => {
      this.artist = x;
      this.artists.push(this.artist);
    });
    this.artistList.results = this.artists;
  }
}
