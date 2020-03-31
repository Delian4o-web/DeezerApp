import { Component, OnInit } from "@angular/core";
import { ArtistsService } from "../services/artists.service";
import { Artists } from "../models/artists";
import { Artist } from "../models/artist";
import { randomInt } from "./randomNum";
import { ActivatedRoute } from "@angular/router";
import { ThousandSuffPipe } from "../pipes/thousand-suff.pipe";

@Component({
  selector: "app-artist-search",
  templateUrl: "./artist-search.component.html",
  styleUrls: ["./artist-search.component.css"]
})
export class ArtistSearchComponent implements OnInit {
  artists: Artist[] = [];
  rndNumber = randomInt(3, 1000);

  constructor(private artistService: ArtistsService) {}

  ngOnInit(): void {
    for (
      let artistNo = this.rndNumber - 20;
      artistNo <= this.rndNumber;
      artistNo++
    ) {
      this.artistService.getArtists(artistNo).subscribe(x => {
        this.artists.push(x);
      });
    }
  }
}
