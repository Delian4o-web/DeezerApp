import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistInfoComponent } from "./artist-info/artist-info.component";

const routes: Routes = [{ path: "artist", component: ArtistInfoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
