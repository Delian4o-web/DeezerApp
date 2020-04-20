import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, ROUTES } from "@angular/router";
import { Location } from "@angular/common";
import { AppComponent } from "./app.component";
import { ArtistInfoComponent } from "./artist-info/artist-info.component";
import { ArtistSearchComponent } from "./artist-search/artist-search.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { routes } from "./app-routing.module";

describe("AppComponent", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        ArtistInfoComponent,
        ArtistSearchComponent,
        PageNotFoundComponent,
      ],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  describe("Routing", () => {
    it("navigate to 'artist' redirects you to /artist", fakeAsync(() => {
      router.navigate(["artist"]);
      tick();
      expect(location.path()).toBe("/artist");
    }));
  });
});
