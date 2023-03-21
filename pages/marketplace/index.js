import List from "@/components/ui/course/List/List";
import BaseLayout from "@/components/ui/layout/base/BaseLayout";
import WalletBar from "@/components/ui/web3/Walletbar/WalletBar";

import { getAllCourse } from "@/content/courses/fetcher";
import { useNetwork } from "@/components/hooks/web3/useNetwork";
import Card from "@/components/ui/course/Card/Card";

export default function Marketplace({ courses }) {
  return (
    <BaseLayout>
      <WalletBar />
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
