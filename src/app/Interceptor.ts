import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";

export class Interceptor implements HttpInterceptor {
  
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        const token=localStorage.getItem('token');
        if(token){
            const cloneReq=req.clone(
                {params: new HttpParams().set('token',token)}
            );
            return next.handle(cloneReq);}
            else return next.handle(req);
        
    }}

export const LoginInterceptorProvider ={
    provide:HTTP_INTERCEPTORS,
    useClass:Interceptor,
    multi:true
}






