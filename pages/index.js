import Hero from "@/components/ui/common/Hero/Hero";
import Card from "@/components/ui/course/Card/Card";
import List from "@/components/ui/course/List/List";
import BaseLayout from "@/components/ui/layout/base/BaseLayout";

import { getAllCourse } from "@/content/courses/fetcher";

export default function Home({ courses }) {
  return (
    <BaseLayout>
      <Hero />
      <List courses={courses}>
        {(course) => <Card course={course} key={course.id} />}
      </List>
    </BaseLayout>
  );
}

export function getStaticProps() {
  const { data } = getAllCourse();
  return {
    props: {
      courses: data,
    },
  };
}
