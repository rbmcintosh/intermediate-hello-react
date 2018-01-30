import {connect} from "react-redux";
import HomePage from "../components/HomePage";

function mapStateToProps(state){
  return {
    // trucks: state.trucks
  }
}

const HomePageContainer = connect(mapStateToProps)(HomePage);

export default HomePageContainer;