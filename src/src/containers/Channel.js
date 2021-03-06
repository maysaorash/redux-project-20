import React from 'react'
import { connect } from 'react-redux';
import { getChannel } from "../store/actions";

let Channel = ({ channelName, channelString, onClick, channel}) => (
<div className=" col-lg-2 col-md-4 col-sm-6 " onClick={onClick}>
  <div className="channel-button" style={{backgroundColor: channel===channelString ? 'orange': "" }}>
 <p>{channelName}</p>
 </div>
</div>
)

const mapStateToProps = (state) => ({
  channel: state.channel
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
  dispatch(getChannel(ownProps.channelString)) }
});
Channel = connect(mapStateToProps,mapDispatchToProps)(Channel)
export default Channel;


