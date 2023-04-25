import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation: ['{{', '}}']
})

export class CardComponent implements OnInit {
    title: string = 'My Card Title'
    text: string = 'My sample text'

    textColor: string = 'black'

    ngOnInit() {}

    changeTitle() {
        this.title = 'My second title'
    }

    inputHandler(value: any) {
        // const  value = event.target.value
        this.title = value
    }

    changeHandler() {
        console.log(this.title)
    }
}