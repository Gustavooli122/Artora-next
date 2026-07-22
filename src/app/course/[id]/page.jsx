import { initialCourses, getCourseById } from "../../data/coursers";
import { CoursePage } from "../../components/coursePage";

export async function generateMetadata({ params }) {
  const { id } = await params;
 
  const course = getCourseById(id);
   
  if (!course) {
    return {
      title: "Curso não encontrado - Artora",
      description: "Este curso não existe.",
    };
  }
const url = `https://artora.company/course/${course.id}`
  return {
    title: `${course.title} - Artora`,
    description: course.description,
     alternates: {
      canonical: `${url}`,
    }
  };
}

export function generateStaticParams() {
  return initialCourses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;

  const course = getCourseById(id);

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  return <CoursePage course={course} />;
}