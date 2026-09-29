export default function KnowledgeBaseStep({ record, onReset }) {
  const rows = [['Dhokra', 'Verified'], [record.name, 'Verified'], ['Paila Art', 'Coming Soon'], ['Ganjifa', 'Coming Soon']];
  return (
    <div className="space-y-5 rounded-2xl border border-line bg-card p-5 shadow-soft">
      <p role="status" className="font-semibold text-emerald-700">Heritage record successfully structured.</p>
      <div className="overflow-hidden rounded-2xl border border-line">
        <div className="flex h-32 items-end p-4" style={{ background: 'linear-gradient(135deg,#8a5aa8,#472a63)' }}><h3 className="text-xl font-bold text-white">{record.name}</h3></div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm"><span className="text-mute">{record.region}. Practitioner: {record.practitioner}</span><span className="font-semibold text-emerald-700">Practitioner Verified</span></div>
      </div>
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-paper"><th className="border border-line p-2 text-left">Heritage</th><th className="border border-line p-2 text-left">Status</th></tr></thead>
        <tbody>{rows.map(([h, s]) => <tr key={h}><td className="border border-line p-2">{h}</td><td className={`border border-line p-2 font-semibold ${s === 'Verified' ? 'text-emerald-700' : 'text-accent2'}`}>{s}</td></tr>)}</tbody>
      </table>
      <button className="btn-ghost" onClick={onReset}>Add another record</button>
    </div>
  );
}
