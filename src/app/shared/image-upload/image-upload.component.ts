import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
//import { mimetype } from "./mime-type.validator";
import { multer } from "multer";

@Component({
  selector: "app-image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.scss"]
})
export class ImageUploadComponent implements OnInit {
  @Input() isRound: boolean = false;
  @Input() image: string;
  state: any = {};
  @ViewChild("input") input: ElementRef;
  constructor() {
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  ngOnInit() {
    this.state = {
      file: null,
      imagePreviewUrl:
        this.image !== undefined
          ? this.image
          : this.isRound
          ? "assets/img/placeholder.jpg"
          : "assets/img/image_placeholder.jpg"
    };
  }
  ngAfterViewInit() {
    this.input.nativeElement.children[2].onchange = this.handleImageChange;
  }
  handleImageChange(e) {
    // e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.state.file = file;
      console.log("file = " + file);
      console.log("file type = " + file.type);
      if (file.type == "image/jpeg" || file.type == "image/png") {
        this.state.imagePreviewUrl = reader.result;
        console.log("1st handleSubmit");
        this.handleSubmit(this.state.file);
      } else {
        console.log("File type error...");
        this.handleRemove();
      }
    };
    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    // e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
    console.log("2nd handleSubmit");

    const MIME_TYPE_MAP = {
      "image/png": "png",
      "image/jpeg": "jpg",
      "image/jpg": "jpg"
    };

    // const storage = multer.diskStorage({
    //   destination: (req, e, cb) => {
    //     cb(null, "backend/images");
    //   },
    //   filename: (req, e, cb) => {
    //     const name = e.originalname
    //       .toLowerCase()
    //       .split(" ")
    //       .join("-");
    //     const ext = MIME_TYPE_MAP[e.mimetype];
    //     cb(null, name + "-" + Date.now() + "." + ext);
    //     console.log("file name: " + name);
    //   }
    // });
  }
  handleClick() {
    this.input.nativeElement.children[2].click();
  }
  handleRemove() {
    this.state.file = null;
    this.state.imagePreviewUrl =
      this.image !== undefined
        ? this.image
        : this.isRound
        ? "assets/img/placeholder.jpg"
        : "assets/img/image_placeholder.jpg";
  }
}
