import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { ArtistsService } from "../services/artists.service";
import { Artist } from "../models/artist";
import { switchAll, debounceTime, map, tap } from "rxjs/operators";
import { of, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.css"]
})
export class ArtistsComponent implements OnInit {
  constructor(private artistService: ArtistsService) {}

  ngOnInit(): void {}
}
