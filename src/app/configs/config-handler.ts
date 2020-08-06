import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export class ConfigHandler {
    private getBackendUrl(): string {
        return environment.backend;
    }

    public getBlogServiceUrl(): string {
        return `${this.getBackendUrl()}${environment.components.blogServer.name}`;
    }

    getDefaultBlogPageSize(): number {
        return environment.blogComponent.pageSize;
    }
}
