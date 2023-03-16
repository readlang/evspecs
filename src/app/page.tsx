'use client';

import { Test } from './test-component';
import { Container } from '@mantine/core';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Container size="xl">
        <Test />
        <br/><br/><br/><br/><br/><br/><br/>
      <div>hello world</div>

      <h1>
        Click for  <Link href="/example">Link</Link> to example page!
      </h1>



      </Container>
      

    </div>
  );
}