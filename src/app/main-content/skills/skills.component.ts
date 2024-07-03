import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  iconArray = inject(ProjectsService);
  hoverAnimation = 'mouseAnimation';

  jump(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('mouseAnimation');
  }

  removeAnimation(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('mouseAnimation');
  }
}
