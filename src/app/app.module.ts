import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './navigation/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './navigation/sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {WelcomeComponent} from './welcome/welcome.component';
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {UiService} from "./services/ui.service";
import {AppRoutingModule} from "./app-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PersonalContentComponent} from './personal-content/personal-content.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {ProductsComponent} from './products/products.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {ProductsService} from "./services/products.service";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {environment} from "../environments/environment"
import {ReactiveFormsModule} from "@angular/forms";
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import {ImagesService} from "./services/images.service";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    WelcomeComponent,
    PersonalContentComponent,
    ImageGalleryComponent,
    ProductsComponent,
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatSidenavModule,
    RouterModule,
    MatMomentDateModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es'}, ProductsService, ImagesService, UiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
