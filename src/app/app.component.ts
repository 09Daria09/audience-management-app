import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudiencesListComponent } from "./components/audiences-list/audiences-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AudiencesListComponent]
})
export class AppComponent {
  title = 'audience-management-app';
}
