"use client";
import { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/courses")
      .then(res => res.json())
      .then(setCourses);
  }, []);

  const filtered =
    filter === "All"
      ? courses
      : courses.filter(c => c.level === filter);

  return (
    <div>
      <h2>Courses</h2>

     
      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filtered.map(c => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}