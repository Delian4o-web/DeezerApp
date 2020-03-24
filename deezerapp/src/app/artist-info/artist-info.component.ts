import { Component, OnInit } from "@angular/core";

import { Artist } from "../models/artist";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-artist-info",
  templateUrl: "./artist-info.component.html",
  styleUrls: ["./artist-info.component.css"]
})
export class ArtistInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
