import { Component, OnInit } from '@angular/core';
import {GetPostByIdService} from '../_server/get-post-by-id.service';
import {Post} from '../../../common/_interface/post.interface';

@Component({
  selector: 'app-label-top10-posts',
  templateUrl: './label-top10-posts.component.html',
  styleUrls: ['./label-top10-posts.component.css']
})
export class LabelTop10PostsComponent implements OnInit {

  constructor(
    public getServer: GetPostByIdService,
  ) { }
  posts: any;
  ngOnInit(): void {
      this.getServer.getConfig()
        .pipe()
        .subscribe(
          data => {
            console.log(data);
            this.posts = data;
            return data;
          });
      console.log(this.posts);
  }

}
