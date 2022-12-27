import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Input()
  cardIndex: string;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  onCourseViewed() {
    console.log("course-card-component-event");
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return "beginner";
    }
  }

  cardStyles() {
    return { "text-decoration": "underline" };
  }

  cardImage() {
    return { "background-image": "url(" + this.course.iconUrl + ")" };
  }
}
