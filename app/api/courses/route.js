export async function GET() {
  return Response.json([
    {
      id: 1,
      title: "MERN",
      duration: "3 months",
      level: "Beginner",
      image: "/mern.jpg"
    },
    {
      id: 2,
      title: "Java",
      duration: "2 months",
      level: "Intermediate",
      image: "/java.jpg"
    }
  ]);
}