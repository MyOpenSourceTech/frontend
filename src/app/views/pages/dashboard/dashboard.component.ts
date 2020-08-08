import {Component, OnInit} from '@angular/core';
import {Blog} from "../../../models/blog";
import {BlogService} from "../../../services/blog.service";
import {ConfigHandler} from "../../../configs/config-handler";
import {Pageable} from "../../../models/pageable";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [BlogService, ConfigHandler,]
})
export class DashboardComponent implements OnInit {
    public blogs: Blog[];
    public pageNumber: number;

    constructor(private blogService: BlogService, private configHandler: ConfigHandler, private router: Router) {
    }

    async ngOnInit(): Promise<void> {
        this.pageNumber = 1;
        let defaultBlogPageSize = this.configHandler.getDefaultBlogPageSize();
        this.blogs = await this.blogService.getBlogList(new Pageable(this.pageNumber, defaultBlogPageSize));
        console.log(this.blogs);
    }

    async openBlog(id: string) {
        await this.router.navigate([`/blog/${id}`])
    }
}
