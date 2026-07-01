interface Props {
  chapter: string;
  title: string;
}

export default function SectionLabel({
  chapter,
  title,
}: Props) {
  return (
    <div className="mb-20">

      <p className="uppercase tracking-[0.5em] text-[#7B8A86]">
        {chapter}
      </p>

      <h2 className="mt-6 text-7xl leading-[0.92]">
        {title}
      </h2>

    </div>
  );
}