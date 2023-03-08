import Modal from "@/components/ui/common/Modal/Modal";
import Curriculum from "@/components/ui/course/Curriculum/Curriculum";
import Hero from "@/components/ui/course/Hero/Hero";
import Keypoints from "@/components/ui/course/Keypoints/Keypoints";
import BaseLayout from "@/components/ui/layout/base/BaseLayout";
import { getAllCourse } from "@/content/courses/fetcher";

export default function Course({ course }) {
  return (
    <BaseLayout className="relative max-w-7xl mx-auto px-4">
      <div className="py-4">
        <Hero
          desc={course.description}
          img={course.coverImage}
          title={course.title}
        />
      </div>
      <Keypoints points={course.wsl} />
      <Curriculum locked={true} />
      <Modal />
    </BaseLayout>
  );
}
//genrating params so that we can use the slug in server side
export function getStaticPaths() {
  const { data } = getAllCourse();

  return {
    paths: data.map((elem) => ({ params: { slug: elem.slug } })),
    fallback: false,
  };
}
//server side rendering
export function getStaticProps({ params }) {
  const { data } = getAllCourse();
  const course = data.filter((elem) => elem.slug === params.slug)[0];
  return {
    props: {
      course,
    },
  };
}
