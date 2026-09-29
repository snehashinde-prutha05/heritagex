import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
export default function PageStub({ title }) {
  return (
    <div className="pb-10 text-center">
      <PageHeader title={title} subtitle="This page is planned in the next build." />
      <Link to="/" className="btn-ghost">Back to Home</Link>
    </div>
  );
}
