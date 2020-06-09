import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../services/images.service";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  images: any[];
  isLoading: boolean = false;

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.imagesService.getImages();
    this.imagesService.images.snapshotChanges()
      .subscribe(imagesDB => {
        this.images = imagesDB.map(img => ({
          key: img.payload.key,
          ...img.payload.val()
        }));
        this.isLoading = false
      })
  }

  removeImage(image){
    this.imagesService.removeImage(image)
  }

}
