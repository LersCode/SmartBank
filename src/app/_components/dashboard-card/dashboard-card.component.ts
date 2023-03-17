import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  //
  // Inputs:
  //
  // Title of the card
  @Input() title: string = '';
  // Button
  @Input() btntxt: string = '';
  @Input() fnctn: (() => void) | undefined;
  //
  // Outputs:
  //
  // Click event
  @Output() cardClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.cardClick.emit();
    if (this.fnctn) {
      this.fnctn();
    }
  }
}
