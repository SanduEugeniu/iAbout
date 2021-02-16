import { Component, OnInit } from '@angular/core';
import {GetPostByIdService} from '../_server/get-post-by-id.service';
import {Post} from '../../../common/_interface/post.interface';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-label-top10-posts',
  templateUrl: './label-top10-posts.component.html',
  styleUrls: ['./label-top10-posts.component.css']
})
export class LabelTop10PostsComponent implements OnInit {

  constructor(
    private router: Router,
    public getServer: GetPostByIdService,
  ) { }
  posts: any;
  isVisible = false;
  mouse$: Subject<boolean> = new Subject<boolean>();
  mouse1$ = new Subject();
  ngOnInit(): void {
      this.getServer.getConfig()
        .pipe()
        .subscribe(
          data => {
            this.posts = data;
            return data;
          });
  }

  getPost(id): void {
    this.router.navigate(['/post/:' + id]);

  }
}
