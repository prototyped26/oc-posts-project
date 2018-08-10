import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() item: Post;
  constructor() { }

  ngOnInit() {
  }

  onItemLoveIt(): void {
    this.item.loveIts += 1;
  }

  onItemUnLoveIt(): void {
    this.item.loveIts -= 1;
  }
}
