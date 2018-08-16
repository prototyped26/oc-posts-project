import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  post: Post;
  postForm: FormGroup;

  constructor(private postsService: PostsService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title : [ '', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;

    this.post = {
      content: content,
      title: title,
      loveIts: 0,
      created_at: new Date()
    };

    this.postsService.addNewPost(this.post);
    this.router.navigate(['/posts']);
  }

}
