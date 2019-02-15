import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { PostsService } from '../../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {



  // public enteredPost: Post = {title: '' , content: ''};

  constructor(public postsService: PostsService) {}

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title , form.value.content);
    form.resetForm();
  }
}
