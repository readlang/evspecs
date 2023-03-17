import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <br/><br/>
      <div>hello world</div>

      <h1>
        Click for  <Link href="/example">Link</Link> to example page!
      </h1>
    </div>
  );
}