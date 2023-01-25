import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './view/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { MembroComponent } from './view/membro/membro.component';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { MembroCreateComponent } from './components/membro/membro-create/membro-create.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MembroDeleteComponent } from './components/membro/membro-delete/membro-delete.component';
import { MembroIndexComponent } from './components/membro/membro-index/membro-index.component';
import {MatTableModule} from '@angular/material/table';
import { MembroUpdateComponent } from './components/membro/membro-update/membro-update.component';
import { LoginComponent } from './view/login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    MembroComponent,
    UsuarioComponent,
    MembroCreateComponent,
    DialogComponent,
    MembroDeleteComponent,
    MembroIndexComponent,
    MembroUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
