import PropTypes from 'prop-types';
import useFetch from "../hooks/useFetch";
import ContextData from "./context";

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