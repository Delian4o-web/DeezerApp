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
  artists: Artist[] = new Array();
  artist: Artist;
  artistList: Artists;

  constructor(private artistService: ArtistsService) {}

  ngOnInit(): void {
    this.artistList = new Artists();
    for (let artistNo = 58; artistNo <= 76; artistNo++) {
      this.artistService.getArtists(artistNo).subscribe(x => {
        this.artist = x;
        this.artists.push(this.artist);
      });
    }
    this.artistList.results = this.artists;
  }
}
