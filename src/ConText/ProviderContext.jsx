import ContextData from '@context/context';
import useFetch from '@hooks/useFetch';
import PropTypes from 'prop-types';

const ContextProvider = ({ children }) => {

  const datas = useFetch()

  return (
    <ContextData.Provider value={datas}>
      {children}
    </ContextData.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;