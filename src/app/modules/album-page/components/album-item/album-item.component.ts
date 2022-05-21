import {Component, Input, OnInit} from '@angular/core';
import {Album, AlbumItem} from "../../album-page";

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit {
  @Input() album!: AlbumItem;

  constructor() { }

  ngOnInit(): void {
  }

}
