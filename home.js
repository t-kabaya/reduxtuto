// home.js
import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { setName, deleteName } from './redux/userRedux'
import {store} from './redux/index'

export class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text style={{marginTop: 100}}>My name is {this.props.name}.</Text>
        <View style={{flexDirection: 'row'}}>
          <Button
            onPress={this.props.deleteName}
            title="deleteName"
          /> 
          <Button
            onPress={() => this.props.setName('カバヤ')}
            title="setName"
          />
        </View>
        <Text style={{marginTop: 100}}>superUser name is {this.props.superUserName}. I'm {this.props.superUserAge} years old.</Text>
          <Button
            onPress={() => this.props.setSuperUser('スーパー　カバヤ', 24)}
            title="set super user Name"
          />
        {/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
        {/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
        <Text style={{marginBottom: 100}}>現在のstore: {JSON.stringify(store.getState())}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
　 // storeは巨大なJsonの塊なので、nameにjsonから取って来たデータを代入している。 
  name: state.user.name,
  superUserName: state.superUser.name,
  superUserAge: state.superUser.age
})

const mapDispatchToProps = dispatch => ({
  // actionCreatorを記述。
  setName: (name) => dispatch(setName(name)),
  deleteName: () => dispatch(deleteName()),
  setSuperUser: (name, age) => dispatch({type: 'SET_SUPER_USER_NAME', name, age})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
