import { useState } from 'react';
export default function MediaAudio({ src, title }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="rounded-2xl border border-line bg-card p-4 shadow-soft">
      {failed
        ? <p className="text-sm text-mute">Add <code className="rounded bg-paper px-1">{src}</code> to play “{title}”.</p>
        : <audio className="w-full" controls controlsList="nodownload" preload="metadata" src={src} aria-label={title} onError={() => setFailed(true)} />}
      <p className="mt-2 text-xs text-mute">Original recording. It is never replaced, only annotated.</p>
    </div>
  );
}
