export default function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-24">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}