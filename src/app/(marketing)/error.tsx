'use client';

import { MaxWidthWrapper } from '~/components/MaxWidthWrapper';

const Error = () => {
  return (
    <MaxWidthWrapper className='flex h-full items-center justify-center'>
      <div className='text-neutral-400'>Something went wrong.</div>
    </MaxWidthWrapper>
  );
};

export default Error;
