export default function List({ courses, children }) {
  return (
    <section className="grid grid-cols-1 w-full lg:grid-cols-2 gap-4 mb-5">
      {courses.map((elem) => children(elem))}
    </section>
  );
}
