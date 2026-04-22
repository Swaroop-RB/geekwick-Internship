export default async function CourseDetail({ params }) {
  const res = await fetch("http://localhost:3000/api/courses");
  const courses = await res.json();

  const course = courses.find(c => c.id == params.id);

  if (!course) {
    return <h3>❌ Course not found</h3>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <img src={course.image} width="200" />
      <p>{course.duration}</p>
      <p>{course.level}</p>
    </div>
  );
}