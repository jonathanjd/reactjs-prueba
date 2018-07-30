// dependencies
import { connect } from 'react-redux';
// actions
import * as actions from '../actions/ContactPage';
// component
import Contact from '../components/Contact';


export default connect(state => ({
  title: state.contact.title,
}), actions)(Contact);
