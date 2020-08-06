import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpMiddleware implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let httpHeaders = new HttpHeaders({});
        httpHeaders = httpHeaders.set('Access-Control-Allow-Headers', ['accept', 'content-type']);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'POST');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', 'true');

        const authReq = req.clone({
            headers: httpHeaders
        });

        console.log('Intercepted HTTP call', authReq);

        return next.handle(authReq);
    }
}
