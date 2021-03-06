import { Component, OnInit, Output, Input } from "@angular/core";
import { Artist } from "../models/artist";
import { ActivatedRoute } from "@angular/router";
import { ArtistsService } from "../services/artists.service";
import { Artists } from "../models/artists";
import { TracklistService } from "../services/tracklist.service";
import { Track } from "../models/track";
import { Albums } from "../models/albums";
import { Album } from "../models/album";
import { AlbumService } from "../services/album.service";
import { Pipe, PipeTransform } from "@angular/core";
import { ThousandSuffPipe } from "../pipes/thousand-suff.pipe";
import { MinuteSecondsPipe } from "../pipes/minute-seconds.pipe";
import { Location } from "@angular/common";

@Component({
  selector: "app-artist-info",
  templateUrl: "./artist-info.component.html",
  styleUrls: ["./artist-info.component.css"]
})
export class ArtistInfoComponent implements OnInit {
  artistId: number;
  artist: Artist;
  tracks: Track[];
  albums: Albums;
  albumlist: Album[] = new Array();
  loading = true;

  constructor(
    private actRoute: ActivatedRoute,
    private artistService: ArtistsService,
    private tracklistService: TracklistService,
    private albumService: AlbumService,
    private location: Location
  ) {
    this.artistId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.artistService.getArtists(this.artistId).subscribe(x => {
      this.artist = x;
      this.loading = false;
    });

    this.tracklistService.getTrackList(this.artistId).subscribe(x => {
      this.tracks = x;
    });

    this.albumService.getAlbumlist(this.artistId).subscribe(x => {
      this.albums = x;
      this.albumlist = this.albums.data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
