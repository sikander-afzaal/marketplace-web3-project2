import Image from "next/image";
import Link from "next/link";

const Card = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full lg:max-w-2xl">
      <div className="flex sm:flex-row flex-col h-full">
        <div className="relative w-full sm:w-48 sm:min-w-[192px]  aspect-video sm:aspect-auto sm:h-full">
          <Image
            fill
            style={{ objectFit: "cover" }}
            // className="object-cover"
            src={course.coverImage}
            alt={course.title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {course.type}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {course.title}
          </Link>
          <p className="mt-2 text-gray-500">{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
