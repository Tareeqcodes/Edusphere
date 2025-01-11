import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className='text-cente pt-20  justify-center text-center items-center h-screen'>
      <h1 className='text-2xl font-semibold mb-4'>404 Not Found</h1>
      <p className='text-xl mb-5'>This page does not exist</p>
      <Link
        to='/'
        className='text-white rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
