import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  skillIcons = [
    {
      icon: 'Property 1=JavScript.png',
      iconText: 'JavaScript',
    },
    {
      icon: 'Property 1=Angular.png',
      iconText: 'Angular',
    },
    {
      icon: 'Property 1=Typescript.png',
      iconText: 'Typescript',
    },
    {
      icon: 'Property 1=html.png',
      iconText: 'HTML',
    },
    {
      icon: 'Property 1=Git.png',
      iconText: 'Git',
    },
    {
      icon: 'Property 1=Firebase.png',
      iconText: 'Firebase',
    },
    {
      icon: 'Property 1=css.png',
      iconText: 'CSS',
    },
    {
      icon: 'Property 1=Scrum.png',
      iconText: 'Scrum',
    },
    {
      icon: 'Property 1=Api.png',
      iconText: 'Rest-Api',
    },
    {
      icon: 'Property 1=Matirial.png',
      iconText: 'Material design',
    },
  ];

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
      bgImage: 'startscreen_1.png',
      gitRepositories: 'https://github.com/Iznoble/El-pollo-loko.git',
      liveTest: 'https://denis-kusmitschev.com/Games/index.html',
      title: 'Ell Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      usedLanguage: 'HTML | CSS | JavaScript',
    },
  ];
}
