import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import {
  NgbModal,
  NgbActiveModal,
  NgbModalOptions
} from "@ng-bootstrap/ng-bootstrap";
import { ErrorComponent } from "./error/error.component";

let options: NgbModalOptions;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private modalService: NgbModal) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error.message) {
          options = {
            injector: error.error.message
          };
        }
        console.log(options);
        const modalRef = this.modalService.open(ErrorComponent);
        modalRef.componentInstance.src = options.injector;

        modalRef.result
          .then(result => {
            console.log(result);
            console.log("closed");
          })
          .catch(result => {
            console.log(result);
            console.log("cancelling");
          });

        return throwError(error);
      })
    );
  }
}
