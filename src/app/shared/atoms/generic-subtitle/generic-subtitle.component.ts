import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-subtitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-subtitle.component.html',
  styleUrls: ['./generic-subtitle.component.scss']
})
export class GenericSubtitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
