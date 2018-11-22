// home.js
import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { addName, deleteName } from './redux'

import {store} from './redux'

export class Home extends Component {
  render() {
    console.log(store.getState())
    console.table(store.getState())
    console.log(typeof store.getState)
    console.log(store)
    return (
      <View>
        <Text style={{marginTop: 200}}>{this.props.name}</Text>
        <Button
          onPress={this.props.deleteName}
          title="deleteName"
        /> 
        <Button
          onPress={() => this.props.addName('私の名前はカバヤです')}
          title="AddName"
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
　 // storeは巨大なJsonの塊なので、userにjsonから取って来たデータを代入している。 
  name: state.user.name
})

const mapDispatchToProps = {  
  // actionCreatorを記述。
  addName,
  deleteName
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)