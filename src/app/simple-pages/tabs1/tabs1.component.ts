import { Component, OnInit } from '@angular/core';
import {GetPostByIdService} from './_server/get-post-by-id.service';
import {filter, first, map} from 'rxjs/operators';
import {Post} from '../../common/_interface/post.interface';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.component.html',
  styleUrls: ['./tabs1.component.css']
})
export class Tabs1Component implements OnInit {

  constructor(
    public getServer: GetPostByIdService,
  ) {
  }

// dataId = [];
  toData: any;
   post: Post;

  ngOnInit(): void {
this.getpostById();
  }


  getpostById() {
   this.getServer.getConfig()
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          return data;
        });


  }
}
