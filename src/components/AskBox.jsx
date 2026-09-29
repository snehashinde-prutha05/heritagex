import { useState } from 'react';
const STOP = new Set(['the','a','an','is','are','of','to','what','why','which','who','how','does','do','it','in','on','for','and','this','that','me','tell','about','was','be']);
const stem = (w) => (w.length > 3 ? w.replace(/(es|s)$/, '') : w);
const words = (s) => s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((w) => w && !STOP.has(w)).map(stem);
// Closest predefined Q&A for a typed question. Question words count double.
function findAnswer(text, list) {
  const qw = words(text);
  if (!qw.length) return null;
  let best = null, top = 0;
  list.forEach((item) => {
    const inQ = words(item.question), inA = words(item.answer);
    const score = qw.reduce((n, w) => n + (inQ.includes(w) ? 2 : 0) + (inA.includes(w) ? 1 : 0), 0);
    if (score > top) { top = score; best = item; }
  });
  return best;
}
export default function AskBox({ title, questions, source }) {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const ask = (q) => { const t = q.trim(); if (t) setResult({ asked: t, match: findAnswer(t, questions) }); };
  return (
    <section className="rounded-2xl border border-dashed border-ink/40 bg-card p-5 shadow-soft">
      <h2 className="text-lg font-bold">{title}</h2>
      <form className="mt-3 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => { e.preventDefault(); ask(text); }}>
        <input value={text} onChange={(e) => setText(e.target.value)} aria-label={title} placeholder={`e.g. ${questions[0].question}`}
          className="flex-1 rounded-full border border-line bg-white px-5 py-3 text-sm outline-none focus:border-accent1" />
        <button type="submit" className="btn">Ask</button>
      </form>
      <div className="mt-3 flex flex-wrap gap-2">
        {questions.slice(0, 4).map((q) => (
          <button key={q.question} type="button" onClick={() => { setText(q.question); ask(q.question); }}
            className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-mute hover:border-accent1 hover:text-ink">{q.question}</button>
        ))}
      </div>
      <div aria-live="polite">
        {result && (
          <div className="mt-4 rounded-2xl border border-line bg-paper p-4">
            {result.match ? (
              <>
                <p className="text-xs text-mute">You asked: {result.asked}</p>
                <p className="mt-2 font-bold">{result.match.question}</p>
                <p className="mt-1">{result.match.answer}</p>
                <p className="mt-3 text-xs italic text-mute">Source: {source}</p>
              </>
            ) : <p className="text-sm text-mute">There is no answer for that yet. Try one of the suggested questions.</p>}
            <p className="mt-2 text-xs text-mute">Answers are predefined and drawn from the knowledge base. This is not an open-ended chatbot.</p>
          </div>
        )}
      </div>
    </section>
  );
}
