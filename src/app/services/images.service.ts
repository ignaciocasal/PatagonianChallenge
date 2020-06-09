import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {UiService} from "./ui.service";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase, private uiService: UiService) { }

  getImages(){
    this.images = this.firebase.list('images')
  }

  insertImage(image){
    this.images.push(image);
  }

  removeImage(image){
    this.images.remove(image.key).then(()=>{
      this.uiService.showSnackbar("The image have been removed", null, 3000)
    });
  }

}
