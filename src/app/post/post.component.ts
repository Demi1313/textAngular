import { Component } from "@angular/core";

@Component({
    selector: 'app-post',
    template: `
        <div class="post">
            <button (click)="onClick()" >Click</button>
        </div>
    `,
    styles: [`
        .post {
            text-align: center;
        }
        button {
            background-color: aqua;
        }
    `]
})

export class PostComponent {
    onClick() {
        
    }
}