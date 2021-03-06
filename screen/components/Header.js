import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'


class Header extends Component {
  render() {
    return(
      <View style ={styles.header}>
        <Text />
        <Text>MY WORDS</Text>
        <TouchableOpacity onPress = {()=> this.props.dispatch({ type: 'TOGGLE_IS_ADDING'})}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  header: {flex:1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: 'row',
    paddingHorizontal: 30
  }
});

export default connect()(Header)
