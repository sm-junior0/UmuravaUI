import ChallengeDetailsClient from './ChallengeDetailsClient';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function ChallengeDetails({ params }: { params: { id: string } }) {
  return <ChallengeDetailsClient params={params} />;
}