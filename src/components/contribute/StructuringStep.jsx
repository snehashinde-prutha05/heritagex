import { useEffect, useState } from 'react';
const stages = ['Raw Media', 'Metadata', 'Materials', 'Tools', 'Process', 'Knowledge Record'];
export default function StructuringStep({ record, onConfirm }) {
  const [n, setN] = useState(0);
  const [edit, setEdit] = useState(false);
  const [rows, setRows] = useState([
    ['Tradition', record.name], ['Region', record.region],
    ['Materials', 'Sample: to be read from the recording'], ['Tools', 'Sample: to be read from the recording'], ['Process', 'Sample: steps to be read from the recording'],
  ]);
  useEffect(() => { if (n >= stages.length) return; const t = setTimeout(() => setN(n + 1), 650); return () => clearTimeout(t); }, [n]);
  const done = n >= stages.length;
  return (
    <div className="space-y-5 rounded-2xl border border-line bg-card p-5 shadow-soft">
      <h2 className="text-xl font-bold">AI structuring</h2>
      <ol className="grid gap-2 sm:grid-cols-3" aria-live="polite">
        {stages.map((s, i) => (
          <li key={s} className={`rounded-xl border px-3 py-2 text-center text-sm font-semibold ${i < n ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : i === n ? 'border-transparent bg-brand text-white' : 'border-line bg-paper text-mute'}`}>{i < n ? '✓ ' : ''}{s}</li>
        ))}
      </ol>
      {done && (
        <>
          <span className="inline-block rounded border border-ink bg-yellow-200 px-2 py-0.5 text-[11px] font-bold">AI STRUCTURED, NOT YET VERIFIED</span>
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} className="border border-line"><th className="w-32 bg-paper p-2 text-left">{k}</th>
                  <td className="p-2">{edit ? <input value={v} onChange={(e) => setRows(rows.map((r, j) => (j === i ? [k, e.target.value] : r)))} className="w-full rounded border border-line px-2 py-1" /> : v}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-mute">Demo: these values are samples. A real run would read them from the uploaded media.</p>
          <div className="flex flex-wrap gap-2">
            <button className="btn" onClick={onConfirm}>Confirm and send to practitioner</button>
            <button className="btn-ghost" onClick={() => setEdit(!edit)}>{edit ? 'Save edits' : 'Edit'}</button>
          </div>
        </>
      )}
    </div>
  );
}
