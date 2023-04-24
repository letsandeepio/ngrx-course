import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers/course.reducers";

import * as fromCourses from "./reducers/course.reducers";

export const selectCoursesState =
  createFeatureSelector<CoursesState>("courses");

export const selectAllCourse = createSelector(
  selectCoursesState,
  fromCourses.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourse,
  (courses) => courses.filter((course) => course.category === "BEGINNER")
);

export const selectAdvancedCourses = createSelector(
  selectAllCourse,
  (courses) => courses.filter((course) => course.category === "ADVANCED")
);

export const selectPromotTotal = createSelector(
  selectAllCourse,
  (courses) => courses.filter((course) => course.promo).length
);

export const areCoursesLoaded = createSelector(
  selectCoursesState,
  (state) => state.allCoursesLoaded
);
