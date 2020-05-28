import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaiseButton from 'material-ui/RaiseButton'

export default class App extends Component {
  render(){
    return(
      <MuiThemeProvider>
        <RaiseButton label="Oh yeah we did it" />
      </MuiThemeProvider>
    )
  }
}
