import { useState } from 'react';
export default function MediaVideo({ src, title }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-line bg-ink">
      {failed ? (
        <div className="grid h-full place-items-center p-6 text-center text-sm text-white/70">
          Add <code className="mx-1 rounded bg-white/10 px-1">{src}</code> to play “{title}”.
        </div>
      ) : (
        <video className="h-full w-full" controls preload="metadata" src={src} aria-label={title} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
