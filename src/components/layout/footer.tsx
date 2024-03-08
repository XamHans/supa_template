import Link from 'next/link';
import configuration from '~/libs/configuration';

const MainContentFooter = () => {
  return (
    <>
      <div className='flex w-full justify-center'>
        <footer className='  bottom-0'>
          <div className='py-4 md:flex md:items-center md:justify-between'>
            <span className='mr-3 text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
              © {new Date().getUTCFullYear()}{' '}
              <Link href={'/'} className='hover:underline'>
                {configuration.site.name}
              </Link>
            </span>
            <ul className='mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
              <li>
                <Link href={'/privacy'} className='hover:underline'>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainContentFooter;
