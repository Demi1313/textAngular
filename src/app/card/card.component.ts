import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

    @Input() card! : Card

    title: string = 'My Card Title'
    text: string = 'My sample text'

    textColor: string = 'black'

    ngOnInit() {}

    changeTitle() {
        this.card.title = 'My second title'
    }

    inputHandler(value: any) {
        // const  value = event.target.value
        this.title = value
    }

    changeHandler() {
        console.log(this.card.title)
    }
}