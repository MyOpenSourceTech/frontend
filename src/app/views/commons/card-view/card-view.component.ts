import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-card-view',
    templateUrl: 'card-view.component.html',
    styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {

    constructor() {
    }

    public getTheme(): string {
        return 'bg-color-option-' + (Math.floor(Math.random() * Math.floor(3)) + 1);
    }
}
