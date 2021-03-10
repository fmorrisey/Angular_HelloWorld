import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { CoursesComponent } from './course/courses.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author/author.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CoursesService, AuthorService], // Dependency Injection
  bootstrap: [AppComponent],
})
export class AppModule {}
