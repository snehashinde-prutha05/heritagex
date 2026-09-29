// Decorative cut-out stickers around the hero. Swap for real photo cut-outs later.
export default function Stickers() {
  return (
    <div aria-hidden="true" className="sticker pointer-events-none hidden lg:block">
      <svg className="absolute left-3 top-0 -rotate-6" width="110" height="110" viewBox="0 0 120 120"><circle cx="60" cy="24" r="14" fill="#c98a2b" /><path d="M40 44h40l8 44H32z" fill="#b5741d" /><path className="keep" d="M44 58h32M42 70h36M40 82h40" fill="none" /><rect x="38" y="88" width="44" height="10" rx="3" fill="#8a5514" /></svg>
      <svg className="absolute right-6 top-2 rotate-6" width="110" height="100" viewBox="0 0 120 110"><path d="M14 58h92c-4 26-22 40-46 40S18 84 14 58z" fill="#d98a2f" /><path d="M60 52c-14-10-8-26 0-38 8 12 14 28 0 38z" fill="#ffb02e" /></svg>
      <svg className="absolute bottom-8 left-0 -rotate-3" width="110" height="100" viewBox="0 0 120 110"><circle cx="34" cy="70" r="18" fill="#9a8f86" /><circle cx="72" cy="76" r="16" fill="#b5aba0" /><circle cx="56" cy="40" r="15" fill="#8c817a" /><circle cx="92" cy="46" r="10" fill="#a89e94" /></svg>
      <svg className="absolute bottom-10 right-[20%] rotate-6" width="100" height="90" viewBox="0 0 110 100"><ellipse cx="55" cy="66" rx="46" ry="22" fill="#8f8378" /><ellipse cx="55" cy="54" rx="42" ry="20" fill="#b3a79b" /><ellipse cx="55" cy="52" rx="14" ry="6" fill="#6f655c" /></svg>
    </div>
  );
}
