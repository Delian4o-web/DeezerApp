import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistInfoComponent } from "./artist-info/artist-info.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//{ path: "artist", component: ArtistInfoComponent }
