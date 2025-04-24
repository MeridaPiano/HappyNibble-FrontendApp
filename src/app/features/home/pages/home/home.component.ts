import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import SpecialtiesComponent from "../../../about-us/components/specialties/specialties.component";
import OurStoryComponent from "../../../about-us/components/our-story/our-story.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    SpecialtiesComponent,
    OurStoryComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  
}
