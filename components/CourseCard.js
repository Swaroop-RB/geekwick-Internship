import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      width: "200px"
    }}>
      <img src={course.image} width="180" height="100" />

      <h4>{course.title}</h4>
      <p>{course.duration}</p>
      <p>{course.level}</p>

      <Link href={`/courses/${course.id}`}>View Details</Link>
    </div>
  );
}