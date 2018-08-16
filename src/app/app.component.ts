import {Component, OnInit} from '@angular/core';
import {PostsService} from './services/posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public posts: Array<Post>;
  constructor(private postsService: PostsService) { }

  ngOnInit() {  }

}
