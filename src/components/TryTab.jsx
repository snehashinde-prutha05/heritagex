import { useState } from 'react';
const Box = ({ title, children }) => (
  <section className="rounded-2xl border border-line bg-card p-5 shadow-soft"><h2 className="mb-2 font-bold">{title}</h2>{children}</section>
);
const sample = [['Similarity', '78%'], ['Timing', 'Slightly early'], ['Gesture', 'Good']];
export default function TryTab({ h }) {
  const [file, setFile] = useState(null);
  const [done, setDone] = useState(false);
  const t = h.tryActivity;
  return (
    <div className="space-y-4">
      <Box title="Reference">
        <p className="font-semibold">{t.title}</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-mute">{t.instructions.map((i) => <li key={i}>{i}</li>)}</ol>
      </Box>
      <Box title="Record"><p className="text-mute">Camera recording arrives with the Computer Vision build. For now, upload a short clip.</p></Box>
      <Box title="Upload">
        <input type="file" accept="video/*" onChange={(e) => { setFile(e.target.files[0] || null); setDone(false); }} className="text-sm" />
        {file && <p className="mt-2 text-sm text-mute">Selected: {file.name}</p>}
      </Box>
      <Box title="Analyze"><button className="btn" disabled={!file} onClick={() => setDone(true)}>Analyze practice</button></Box>
      {done && (
        <Box title="Feedback">
          <div className="grid gap-2 sm:grid-cols-3">{sample.map(([k, v]) => (
            <div key={k} className="rounded-xl border border-line bg-paper px-3 py-2"><div className="text-xs text-mute">{k}</div><div className="font-semibold">{v}</div></div>
          ))}</div>
          <p className="mt-3 text-sm"><b>Recommendation:</b> {t.recommendation}</p>
          <p className="mt-2 text-xs text-mute">Sample feedback. Computer Vision analysis is not connected yet.</p>
        </Box>
      )}
    </div>
  );
}
