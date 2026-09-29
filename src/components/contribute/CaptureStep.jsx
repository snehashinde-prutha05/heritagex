import { useState } from 'react';
import UploadSlot from '../UploadSlot';
const regions = ['Maharashtra', 'Jharkhand', 'West Bengal', 'Odisha', 'Rajasthan', 'Other'];
const input = 'w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-accent1';
const Field = ({ label, children }) => <label className="block text-sm font-semibold">{label}<span className="mt-1 block font-normal">{children}</span></label>;
export default function CaptureStep({ onSubmit }) {
  const [f, setF] = useState({ name: '', region: '', description: '', practitioner: '' });
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.region) { setErr('Add a heritage name and pick a region to continue.'); return; }
    onSubmit({ ...f, name: f.name.trim(), practitioner: f.practitioner.trim() || 'Community practitioner' });
  };
  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-line bg-card p-5 shadow-soft">
      <h2 className="text-xl font-bold">Record a tradition</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Heritage name"><input className={input} value={f.name} onChange={set('name')} placeholder="e.g. Warli Painting" /></Field>
        <Field label="Region"><select className={input} value={f.region} onChange={set('region')}><option value="">Select a region</option>{regions.map((r) => <option key={r}>{r}</option>)}</select></Field>
      </div>
      <Field label="Practitioner"><input className={input} value={f.practitioner} onChange={set('practitioner')} placeholder="Name of the practitioner" /></Field>
      <Field label="Description"><textarea className={input} rows={3} value={f.description} onChange={set('description')} placeholder="Describe the tradition in a few lines" /></Field>
      <div className="grid gap-3 md:grid-cols-3">
        <UploadSlot kind="video" label="Upload video" />
        <UploadSlot kind="audio" label="Upload audio" />
        <UploadSlot kind="image" label="Upload images" />
      </div>
      <p className="text-xs text-mute">Demo only: files stay in your browser and are not uploaded anywhere.</p>
      {err && <p role="alert" className="text-sm font-semibold text-accent1">{err}</p>}
      <button type="submit" className="btn">Submit for verification</button>
    </form>
  );
}
