import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { ArtistsService } from "./artists.service";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Artist } from "../models/artist";

describe("ArtistsService", () => {
  let artistService: ArtistsService;
  let httpTestingController: HttpTestingController;
  let ARTISTS: Artist;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    artistService = TestBed.inject(ArtistsService);
    httpTestingController = TestBed.inject(HttpTestingController);

    ARTISTS = {
      id: 27,
      name: "Daft Punk",
      link: "https://www.deezer.com/artist/27",
      share:
        "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1587365544&utm_medium=web",
      picture: "https://api.deezer.com/artist/27/image",
      picture_small:
        "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
      nb_album: 33,
      nb_fan: 3775863,
      radio: true,
      tracklist: "https://api.deezer.com/artist/27/top?limit=50",
    } as Artist;

    it("should return an Artist based on ArtistID", (done: DoneFn) => {
      artistService.getArtists(27).subscribe((value) => {
        expect(value).toBe(ARTISTS);

        done();
      });

      const req = httpTestingController.expectOne(
        `${environment.apiUri}/artist/27`
      );
      req.flush(ARTISTS);
      httpTestingController.verify();
    });
  });
});
