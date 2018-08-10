import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts: Array<Post>;
  constructor() {
    this.posts = [
      {
        title: 'Manager',
        content: 'blldkfjkdsjf lskdjfklsjdfk sjlfk jsdklfjdsklf jsdlkfj ldskfj dskljf ',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Informations',
        content: ' pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes lorer les item. ',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Open Classrooms',
        content: ' Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque ',
        loveIts: 0,
        created_at: new Date()
      }
    ];
  }
}
