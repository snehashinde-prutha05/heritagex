import { useEffect, useState } from 'react';
const stages = [['Submitted', 'bg-gray-400'], ['Under Review', 'bg-orange-400'], ['Verified', 'bg-green-500']];
export default function VerifyStep({ record, onVerified }) {
  const [stage, setStage] = useState(1);
  useEffect(() => { const t = setTimeout(() => setStage((s) => (s === 1 ? 2 : s)), 1200); return () => clearTimeout(t); }, []);
  useEffect(() => { if (stage !== 3) return; const t = setTimeout(onVerified, 900); return () => clearTimeout(t); }, [stage]);
  return (
    <div className="space-y-5 rounded-2xl border border-line bg-card p-5 shadow-soft">
      <h2 className="text-xl font-bold">Practitioner verification</h2>
      <p className="text-mute">A community practitioner reviews the AI-structured draft and confirms it reflects the tradition accurately. AI never decides what is culturally authentic.</p>
      <ol className="flex items-center" aria-label="Verification status">
        {stages.map(([label, color], i) => (
          <li key={label} className="flex flex-1 items-center gap-2 last:flex-none">
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold text-white ${i < stage ? color : 'bg-line'}`}>{i < stage ? '✓' : i + 1}</span>
            <span className={`text-sm font-semibold ${i < stage ? 'text-ink' : 'text-mute'}`}>{label}</span>
            {i < stages.length - 1 && <span className={`mx-1 h-0.5 flex-1 ${i + 1 < stage ? color : 'bg-line'}`} />}
          </li>
        ))}
      </ol>
      <p className="text-sm italic text-mute"><b>Reviewer:</b> {record.practitioner}. <b>Region:</b> {record.region}.</p>
      <button className="btn" disabled={stage !== 2} onClick={() => setStage(3)}>{stage === 1 ? 'Waiting for review…' : 'Mark as practitioner verified ✓'}</button>
    </div>
  );
}
