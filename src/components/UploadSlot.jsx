import { useState } from 'react';
// Frontend-only upload: shows a local preview. Nothing is sent to a server.
export default function UploadSlot({ kind, label }) {
  const [url, setUrl] = useState(null);
  const [name, setName] = useState('');
  const accept = { video: 'video/*', audio: 'audio/*', image: 'image/*' }[kind];
  const pick = (e) => {
    const files = [...e.target.files];
    if (!files.length) return;
    setUrl(URL.createObjectURL(files[0]));
    setName(files.length > 1 ? `${files.length} files` : files[0].name);
  };
  return (
    <div className="rounded-2xl border-2 border-dashed border-line bg-card p-4">
      <div className="mb-2 text-sm font-semibold">{label}</div>
      {url && kind === 'video' && <video src={url} controls className="mb-2 aspect-video w-full rounded-xl bg-ink" />}
      {url && kind === 'audio' && <audio src={url} controls className="mb-2 w-full" />}
      {url && kind === 'image' && <img src={url} alt="" className="mb-2 h-32 w-full rounded-xl object-cover" />}
      <label className="btn-ghost cursor-pointer"><input type="file" accept={accept} multiple={kind === 'image'} onChange={pick} className="sr-only" />{url ? 'Replace file' : 'Choose file'}</label>
      {name && <span className="ml-3 text-xs text-mute">{name}</span>}
    </div>
  );
}
