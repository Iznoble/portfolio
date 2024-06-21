import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingpageComponent, AboutMeComponent,SkillsComponent, PortfolioProjectsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
