import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {ImagesService} from "../services/images.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  defaultImgSrc: string = "/assets/img/default-img.png";
  previewImgSrc: string;
  selectedImage: any;
  isSubmitted: boolean;
  isLoading: boolean = false;

  formTemplate = new FormGroup({
    imageUrl: new FormControl('', Validators.required)
  });

  constructor(private storage: AngularFireStorage, private imagesService: ImagesService, private router: Router) {
  }

  ngOnInit() {
    this.imagesService.getImages();
    this.resetForm()
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.previewImgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.previewImgSrc = this.defaultImgSrc;
      this.selectedImage = null
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      this.isLoading = true;
      let fileName = this.selectedImage.name.split('.').slice(0, -1).join('');
      let filePath = `images/${fileName}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            formValue['imageUrl'] = url;
            this.imagesService.insertImage(formValue);
            this.resetForm();
            this.isLoading = false;
            this.router.navigate(['/image-gallery']);
          })
        })).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls']
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: ''
    });
    this.previewImgSrc = this.defaultImgSrc;
    this.selectedImage = null;
    this.isSubmitted = false;
  }
}
