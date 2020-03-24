import { Component, OnInit } from "@angular/core";
import { Artist } from "../models/artist";
import { ActivatedRoute } from "@angular/router";
import { ArtistsService } from "../services/artists.service";
import { Artists } from "../models/artists";
import { Tracklist } from "../models/tracklist";
import { TracklistService } from "../services/tracklist.service";
import { Track } from "../models/track";

@Component({
  selector: "app-artist-info",
  templateUrl: "./artist-info.component.html",
  styleUrls: ["./artist-info.component.css"]
})
export class ArtistInfoComponent implements OnInit {
  artistId: number;
  artist: Artist;
  tracklist: Tracklist;
  tracks: Track[];

  constructor(
    private actRoute: ActivatedRoute,
    private artistService: ArtistsService,
    private tracklistService: TracklistService
  ) {
    this.artistId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.artistService.getArtists(this.artistId).subscribe(x => {
      this.artist = x;
    });

    this.tracklistService.getTrackList(this.artistId).subscribe(x => {
      this.tracklist = x;
      this.tracks = this.tracklist.tracks;
    });
  }
}
