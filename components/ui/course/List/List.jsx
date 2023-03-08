import Image from "next/image";
import Link from "next/link";

export default function List({ courses }) {
  return (
    <section className="grid grid-cols-1 w-full lg:grid-cols-2 gap-4 mb-5">
      {courses.map((elem) => (
        <div
          key={elem.id}
          className="bg-white rounded-xl shadow-md overflow-hidden w-full lg:max-w-2xl"
        >
          <div className="flex sm:flex-row flex-col h-full">
            <div className="relative w-full sm:w-48 sm:min-w-[192px]  aspect-video sm:aspect-auto sm:h-full">
              <Image
                fill
                style={{ objectFit: "cover" }}
                // className="object-cover"
                src={elem.coverImage}
                alt={elem.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {elem.type}
              </div>
              <Link
                href={`/courses/${elem.slug}`}
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                {elem.title}
              </Link>
              <p className="mt-2 text-gray-500">{elem.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
