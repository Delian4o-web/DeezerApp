import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { ArtistSearchComponent } from "./artist-search/artist-search.component";
import { ArtistInfoComponent } from "./artist-info/artist-info.component";
import { RouterModule } from "@angular/router";
import { environment } from "../environments/environment";
import { ThousandSuffPipe } from "../app/pipes/thousand-suff.pipe";
import { MinuteSecondsPipe } from "../app/pipes/minute-seconds.pipe";
import { SearchBarComponent } from "./artist-search/search-bar/search-bar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistSearchComponent,
    ArtistInfoComponent,
    ThousandSuffPipe,
    MinuteSecondsPipe,
    SearchBarComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
