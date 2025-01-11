import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '200px auto',
  width: ' 100px'
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#3333'
      loading={loading}
      cssOverride={override}
      size={100}
    />
  );
};
export default Spinner;
