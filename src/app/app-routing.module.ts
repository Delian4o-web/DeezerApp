import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistInfoComponent } from "./artist-info/artist-info.component";
import { ArtistSearchComponent } from "./artist-search/artist-search.component";

const routes: Routes = [
  { path: "", component: ArtistSearchComponent },
  { path: "artist/:id", component: ArtistInfoComponent },
  { path: "**", component: ArtistSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
