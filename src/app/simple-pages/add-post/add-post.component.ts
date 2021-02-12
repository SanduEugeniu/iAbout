// import { Component, OnInit } from '@angular/core';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
// import {Post} from './_model/post.model';
// import {PostService} from './_service/post.service';
// import {Router} from '@angular/router';
// import {Photo} from '../../common/_interface/photo.interface';
// import {observable, Observable} from 'rxjs';
//
// @Component({
//   selector: 'app-add-post',
//   templateUrl: './add-post.component.html',
//   styleUrls: ['./add-post.component.css']
// })
//
// export class AddPostComponent implements OnInit {
//   loading = false;
//   error = '';
//   selected: any;
//   title: any;
//   content: any;
//    imageSrca: any = [];
//   private bottomSheet: MatBottomSheet;
//
//   constructor(bottomSheet: MatBottomSheet,
//               private postService: PostService,
//               private router: Router
//   ) {
//     this.bottomSheet = bottomSheet;
//   }
//   ngOnInit(): any {
//   }
//
//   finishAddPost(): any {
//     this.title = (document.getElementById('title') as HTMLInputElement).value;
//     this.content = (document.getElementById('content') as HTMLInputElement).value;
//     const email = JSON.parse(localStorage.getItem('currentUser')).data.user.email;
//     const fiirstName = JSON.parse(localStorage.getItem('currentUser')).data.user.name;
//     const iid =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//     const lasstName = JSON.parse(localStorage.getItem('currentUser')).data.user.surname;
//     const newPost: Post = {
//       id: iid,
//       mail: email,
//       content: this.content,
//       firstName: fiirstName,
//       lastName: lasstName,
//       title: this.title,
//       category: this.selected,
//       photos: {
//         profilePic: this.imageSrca[0].content ,
//         gallery: this.imageSrca.slice(1, this.imageSrca.length)
// }
//     };
//     console.log(newPost.photos.gallery);
//     this.postService.addPost(newPost).pipe()
//       .subscribe(
//         data => {
//           if (data.success) {
//             this.router.navigate(['/']);
//           } else {
//             this.error = data.data.message;
//             this.loading = false;
//           }
//         });
//   }
//   handleInputChange(e): any {
//     let i;
//     const file = e.dataTransfer ? e.dataTransfer.files : e.target.files;
//
//     for (i = 0; i < file.length; i++ ) {
//       // tslint:disable-next-line:no-shadowed-variable
//       const file = e.dataTransfer ? e.dataTransfer.files[i] : e.target.files[i];
//
//       const pattern = /image-*/;
//       const reader = new FileReader();
//       if (!file.type.match(pattern)) {
//         alert('invalid format');
//         return;
//       }
//       reader.onload = _handleReaderLoaded.bind(this);
//       reader.readAsDataURL(file);
//     }
//     // tslint:disable-next-line:no-shadowed-variable
//     function _handleReaderLoaded(e): any
//     {
//       const reader = e.target;
//       const content = reader.result;
//       this.imageSrca = this.imageSrca.concat({content});
//       this.imageSrca.splice(5);
//
//     }
//   }
//
//   deletSelectIMG(id): void {
//     this.imageSrca.splice(id, 1);
//   }
// }
//
// @Component({
//   // tslint:disable-next-line:component-selector
//   selector: 'bottom-sheet-overview-example-sheet',
//   templateUrl: 'bottom-sheet-overview-example-sheet.html',
// })
// export class BottomComponent {
//   constructor(private bottomSheetRef: MatBottomSheetRef<BottomComponent>) {
//   }
//
//   openLink(event: MouseEvent): void {
//     this.bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
//
// }
