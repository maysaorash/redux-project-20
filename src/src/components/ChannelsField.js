import React from "react";
import Channel from "../containers/Channel";

const ChannelsField = () => (
  <div className="row">
    <Channel channelName="BBC" channelString="bbc-news" />
    <Channel channelName="BLOOMBERG" channelString="bloomberg" />
    <Channel channelName="CNN" channelString="cnn" />
    <Channel channelName="CBS" channelString="cbs-news" />
    <Channel channelName="ESPN" channelString="espn" />
    <Channel channelName="GOOGLE" channelString="google-news" />
  </div>
);
export default ChannelsField;
