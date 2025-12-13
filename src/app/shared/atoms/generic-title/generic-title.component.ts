import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-title.component.html',
  styleUrls: ['./generic-title.component.scss']
})
export class GenericTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
