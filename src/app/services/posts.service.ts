import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Array<Post>;
  public postsSubject = new Subject<Array<Post>>();

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

  emitSubject() {
    this.postsSubject.next(this.posts);
  }

  deletePost(post: Post) {
    const indexPostToDelete = this.posts.findIndex(
      (postElt) => {
        if (postElt === post) {
          return true;
        }
      }
    );
    this.posts.splice(indexPostToDelete, 1);
    this.emitSubject();
  }

  addNewPost(post: Post) {
    this.posts.push(post);
    this.emitSubject();
  }

  addLoveIt(post: Post) {
    const indexPost = this.posts.findIndex(
      (postElt) => {
        if (postElt === post) {
          return true;
        }
      }
    );
    this.posts[indexPost].loveIts += 1;
    this.emitSubject();
  }

  removeLoveIt(post: Post) {
    const indexPost = this.posts.findIndex(
      (postElt) => {
        if (postElt === post) {
          return true;
        }
      }
    );
    this.posts[indexPost].loveIts -= 1;
    this.emitSubject();
  }
}
