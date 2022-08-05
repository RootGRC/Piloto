import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
=======
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
>>>>>>> 722b4b8c71e578a25435d96a5000ba581a9a812b
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
