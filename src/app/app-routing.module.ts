import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistInfoComponent } from "./artist-info/artist-info.component";
import { ArtistSearchComponent } from "./artist-search/artist-search.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: ArtistSearchComponent },
  { path: "artist/:id", component: ArtistInfoComponent },
  { path: "search/:searchTerm", component: ArtistSearchComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
