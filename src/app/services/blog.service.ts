import {Injectable} from '@angular/core';
import {Blog} from "../models/blog";
import {Pageable} from "../models/pageable";
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";
import {ConfigHandler} from "../configs/config-handler";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private http: HttpClient, private configHandler: ConfigHandler) {
    }

    public async getBlogById(id: string): Promise<Blog> {
        const baseUrl = this.configHandler.getBlogServiceUrl();
        return await this.http.get<Blog>(`${baseUrl}/blogs/${id}`).toPromise();
    }

    public async getBlogList(pageable: Pageable): Promise<Blog[]> {
        const baseUrl = this.configHandler.getBlogServiceUrl();
        const responseBody = await this.http.get(`${baseUrl}/blogs?${pageable.toString()}`).toPromise();
        return responseBody['content'];
    }
}
