export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-8 pt-12 text-center">
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 text-mute">{subtitle}</p>}
    </div>
  );
}
