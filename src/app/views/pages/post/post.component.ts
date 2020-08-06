import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../../models/blog";

@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {

    @Input()
    public blog: Blog;

    constructor() {
    }

}
