import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {PersonalContentComponent} from "./personal-content/personal-content.component";
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";
import {ProductsComponent} from "./products/products.component";
import {ImageUploaderComponent} from "./image-uploader/image-uploader.component";

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'personal-content', component: PersonalContentComponent},
  {path:'image-gallery', component: ImageGalleryComponent},
  {path:'image-gallery/upload', component: ImageUploaderComponent},
  {path:'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
