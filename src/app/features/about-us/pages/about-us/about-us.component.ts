import { Component } from '@angular/core';
import OurStoryComponent from "../../components/our-story/our-story.component";
import SpecialtiesComponent from "../../components/specialties/specialties.component";
import { CeoProfileComponent } from "../../components/ceo-profile/ceo-profile.component";

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [OurStoryComponent, SpecialtiesComponent, CeoProfileComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export default class AboutUsComponent {

}
