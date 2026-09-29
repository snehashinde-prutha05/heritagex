import AskBox from './AskBox';
export default function LearnTab({ h }) {
  return (
    <div className="space-y-6">
      <AskBox title={`Ask about ${h.title}`} questions={h.questions} source={`HeritageX knowledge base, ${h.title}.`} />
      <section>
        <h2 className="mb-3 text-lg font-bold">All questions</h2>
        <div className="space-y-3">
          {h.questions.map((q) => (
            <details key={q.question} className="rounded-2xl border border-line bg-card px-5 py-4 shadow-soft">
              <summary className="cursor-pointer font-semibold">{q.question}</summary>
              <p className="mt-2 text-mute">{q.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
