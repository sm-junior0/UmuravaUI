import EditChallengeClient from './EditChallengeClient';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function EditChallengePage({ params }: { params: { id: string } }) {
  return <EditChallengeClient params={params} />;
}