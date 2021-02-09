import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/index";

let Button = ({fetchPosts,channel}) => (
  <button onClick={ ()=> fetchPosts(channel)} 
    className="btn btn-primary btn-lg btn-block">
    Get top news
  </button>
);

const mapStateToProps = (state) => ({
channel: state.channel
});

const mapDispatchToProps = {
  fetchPosts: fetchPosts
};

Button = connect(mapStateToProps, mapDispatchToProps)(Button);
export default Button;