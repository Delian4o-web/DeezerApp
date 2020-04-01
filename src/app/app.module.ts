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
import { ServiceWorkerModule } from "@angular/service-worker";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistSearchComponent,
    ArtistInfoComponent,
    ThousandSuffPipe,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
