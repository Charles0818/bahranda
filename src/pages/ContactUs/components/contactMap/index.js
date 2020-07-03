import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
 
const SimpleMap = ({ text }) => <div>{text}</div>;
 
class ContactMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDjwFVcvNmHsGjhMkMQtxFk7g500VnLH0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <SimpleMap
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default ContactMap;
