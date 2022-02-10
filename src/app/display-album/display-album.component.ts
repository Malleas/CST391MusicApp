import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../models/Album";

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent implements OnInit {

  @Input() album : any
  selectedAlbum: any

  constructor() { }

  ngOnInit(): void {
    this.selectedAlbum = null
  }

  onSelectedAlbum(album:Album){
    this.selectedAlbum = album
  }
}
