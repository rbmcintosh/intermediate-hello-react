import {connect} from "react-redux";
import Gallery from "../components/Gallery";

function mapStateToProps(state){
  return {
    // trucks: state.trucks
  }
}

const GalleryContainer = connect(mapStateToProps)(Gallery);

export default GalleryContainer;