/**
 * Inline marker for a fact or number the author still has to supply.
 * Renders visibly so it cannot ship unnoticed; search the codebase for
 * `<Verify` before launch.
 */
export default function Verify({ children }: { children: string }) {
  return (
    <strong className="rounded border border-brand-amber/50 bg-brand-amber/10 px-1.5 py-0.5 font-mono text-[0.85em] font-semibold text-brand-amber">
      [VERIFY: {children}]
    </strong>
  );
}
