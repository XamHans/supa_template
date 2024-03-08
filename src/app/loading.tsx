'use client';

import { BounceLoader } from 'react-spinners';
import { MaxWidthWrapper } from '~/components/MaxWidthWrapper';

const Loading = () => {
  return (
    <MaxWidthWrapper className='flex h-full items-center justify-center'>
      <BounceLoader color='#22c55e' size={40} />
    </MaxWidthWrapper>
  );
};

export default Loading;
