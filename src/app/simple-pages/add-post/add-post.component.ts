import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {
  private bottomSheet: MatBottomSheet;
  selected: any;
  constructor(bottomSheet: MatBottomSheet) {
    this.bottomSheet = bottomSheet;
  }

  ngOnInit(): void {
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomComponent);
  }

  finishAddPost(): void {
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomComponent>) {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}

