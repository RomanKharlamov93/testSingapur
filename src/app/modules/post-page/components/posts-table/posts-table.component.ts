import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../post-page";

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html'
})
export class PostsTableComponent implements OnInit {
  @Input() posts!: Post[];
  @Input() page!: number;
  @Input() pageSize!: number;
  @Output() postId: EventEmitter<number>;

  constructor() {
    this.postId = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }


  public handleRequest(postId: number): void {
    this.postId.emit(postId);
  }
}
