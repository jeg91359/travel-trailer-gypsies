import { Component, OnInit, Input } from "@angular/core";
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"]
})
export class ErrorComponent implements OnInit {
  @Input() src;

  constructor(public activeModal: NgbActiveModal) {}
  closeResult: string;
  errorMessage: string;

  ngOnInit() {
    this.errorMessage = this.src;
    //console.log(this.errorMessage);
  }
}
