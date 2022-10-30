import PropTypes from 'prop-types';
import styles from './Container.module.css'

const Container = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Container;