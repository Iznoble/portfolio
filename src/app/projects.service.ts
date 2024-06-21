import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}


  hoverInfo = [
    {
      coverImg: 'join_cover.png',
      showInfo: false,
      bgImage: 'join.png',
      gitRepositories: 'https://github.com/Pascalina1985/join774.git',
      liveTest: 'https://denis-kusmitschev.com/join774/log-in.html',
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      usedLanguage: 'HTML | CSS | JavaScript',
    },
    {
      coverImg: 'Pollo loco 1.png',
      showInfo: false,
      bgImage: 'Pollo loco 1.png',
      gitRepositories: 'https://github.com/Iznoble/El-pollo-loko.git',
      liveTest: 'https://denis-kusmitschev.com/Games/index.html',
      title: 'Ell Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      usedLanguage: 'HTML | CSS | JavaScript',
    },
  ];
}
