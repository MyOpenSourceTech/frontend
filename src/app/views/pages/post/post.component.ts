import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../../models/blog";
import {BlogService} from "../../../services/blog.service";
import {ConfigHandler} from "../../../configs/config-handler";

@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [BlogService, ConfigHandler]
})
export class PostComponent implements OnInit {

    @Input()
    public blogId: string;

    public blog : Blog

    constructor(private blogService: BlogService) {
    }

    async ngOnInit(): Promise<void> {
        this.blog = await this.blogService.getBlogById('ff808181731d5d7d01731d5e5b5a0000');
    }
}
