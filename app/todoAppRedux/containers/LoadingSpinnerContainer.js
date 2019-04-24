import LoadingSpinner from "../../components/LoadingSpinner";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isLoading: state.spinner.isLoading
});
export default connect(
  mapStateToProps,
  null
)(LoadingSpinner);
