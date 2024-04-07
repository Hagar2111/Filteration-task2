import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TastyPastriesComponent } from './tasty-pastries/tasty-pastries.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TestymonialsComponent } from './testymonials/testymonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TastyPastriesComponent,
    HowWeWorkComponent,
    AboutUsComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactUsComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bakery';
}
