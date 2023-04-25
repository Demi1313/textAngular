import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true

  cards: Card[] = [
    {title: 'card 1', text: 'this is card 1'},
    {title: 'card 2', text: 'this is card 2'},
    {title: 'card 3', text: 'this is card 3'}
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
