import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../../models/blog";

@Component({
    selector: 'app-card-view',
    templateUrl: 'card-view.component.html',
    styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {

    @Input()
    public blog: Blog;

    constructor() {
    }

    public getTheme(): string {
        return 'bg-color-option-' + (Math.floor(Math.random() * Math.floor(3)) + 1);
    }
}
