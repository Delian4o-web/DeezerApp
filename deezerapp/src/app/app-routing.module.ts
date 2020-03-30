import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistInfoComponent } from "./artist-info/artist-info.component";
import { ArtistSearchComponent } from "./artist-search/artist-search.component";
import { ArtistSearchedComponent } from "./artist-searched/artist-searched.component";

const routes: Routes = [
  { path: "", component: ArtistSearchComponent },
  { path: "artist/:id", component: ArtistInfoComponent },
  { path: "search/:name", component: ArtistSearchedComponent },
  { path: "**", component: ArtistSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
