import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../../models/blog";
import {BlogService} from "../../../services/blog.service";
import {ConfigHandler} from "../../../configs/config-handler";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [BlogService, ConfigHandler]
})
export class PostComponent implements OnInit {
    public blogId: string;

    public blog: Blog

    constructor(private blogService: BlogService, private route: ActivatedRoute) {
    }

    async ngOnInit(): Promise<void> {
        this.route.params.subscribe(params => this.blogId = params['id']);
        this.blog = await this.blogService.getBlogById(this.blogId);
    }
}
