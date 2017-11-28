import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import PropTypes from "prop-types";

import style from "./style";

// TODO: Move this into a proile feature, right now this is here for the purpose of example
class Profile extends React.Component {
  render() {
    const { logout, photo, name, email } = this.props;
    console.log(photo);
    return (
      <View style={style.container}>
        <Image style={style.profileImage} source={{ uri: photo }} />
        <Text style={style.profileText}> Name: {name} </Text>
        <Text style={style.profileText}> Email: {email} </Text>
        <TouchableOpacity onPress={logout} style={style.textView}>
          <Text style={style.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default Profile;
