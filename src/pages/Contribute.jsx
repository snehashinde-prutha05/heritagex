import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CaptureStep from '../components/contribute/CaptureStep';
import StructuringStep from '../components/contribute/StructuringStep';
import VerifyStep from '../components/contribute/VerifyStep';
import KnowledgeBaseStep from '../components/contribute/KnowledgeBaseStep';
const steps = ['Capture', 'AI Structuring', 'Practitioner Verification', 'Knowledge Base'];
export default function Contribute() {
  const [step, setStep] = useState(1);
  const [record, setRecord] = useState(null);
  return (
    <>
      <PageHeader title="Contribute Heritage" subtitle="See how a new record enters HeritageX: capture, AI structuring and practitioner verification, before it joins the knowledge base." />
      <div className="mx-auto max-w-3xl px-5">
        <ol className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {steps.map((label, i) => {
            const n = i + 1;
            const cls = n < step ? 'bg-emerald-100 text-emerald-700' : n === step ? 'bg-brand text-white' : 'bg-card text-mute';
            return <li key={label} aria-current={n === step ? 'step' : undefined} className={`rounded-full border border-line px-3 py-2 text-center text-xs font-semibold ${cls}`}>{n}. {label}</li>;
          })}
        </ol>
        {step === 1 && <CaptureStep onSubmit={(r) => { setRecord(r); setStep(2); }} />}
        {step === 2 && <StructuringStep record={record} onConfirm={() => setStep(3)} />}
        {step === 3 && <VerifyStep record={record} onVerified={() => setStep(4)} />}
        {step === 4 && <KnowledgeBaseStep record={record} onReset={() => { setRecord(null); setStep(1); }} />}
      </div>
    </>
  );
}
