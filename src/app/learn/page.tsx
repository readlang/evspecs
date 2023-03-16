import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div>Learn page</div>
      <h1>
        <Link href="/">Back to home!</Link>
      </h1>
    </div>
  );
}