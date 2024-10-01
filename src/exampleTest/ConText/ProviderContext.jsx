import ContextData from '@/exampleTest/ConText/context.js';
import useFetch from '@/exampleTest/hooks/useFetch.js';
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