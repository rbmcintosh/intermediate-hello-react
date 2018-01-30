import {connect} from "react-redux";
import Navbar from "../components/Navbar";

function mapStateToProps(state){
  return {
    // trucks: state.trucks
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;