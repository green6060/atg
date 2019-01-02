import React, { Component } from 'react'
import { Button, Image, List, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Axios from 'axios';

class AdminDash extends React.Component {

  //Contstructor

  //State Declaration
  state = { announcements: [], games: [], tournaments: [], coaches: [], users: [] }

  //Lifecycle Functions
  componentDidMount() {
    Axios.get('/api/games')
      .then( res => this.setState({ games: res.data }) )
  }

  //Functions

  buildGamesStepOne = () => {
    debugger
    return (
    <List divided verticalAlign='middle'>
      {this.buildGamesStepTwo()}
    </List>)
  }

  buildGamesStepTwo = () => {
    const { games } = this.state
    debugger
    if ( games.length != 0 ) {
      return games.map(game => {
        return(     
        <List.Item key={game.id}>
          <List.Content floated='right'>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </List.Content>
        <List.Content>{game.game_name}</List.Content>
      </List.Item>
      )
      })
    } else {
      return(      
      <List.Item>
        <List.Content>
          We're sorry, there don't seem to be any games available right now. Try later, or contact support!
        </List.Content>
      </List.Item>
      )

    }
  }

  buildMiscellaneous = () => {
    //List includes:
    //Manage User Titles
    //Manage User Punishments
    //Manage User Permissions
  }

  //Primary Render
  render() {
    return (
      <Menu>
        <Menu.Item>
          <Menu.Header>
            <Menu.Item
                name='announcementSettings'
                onClick={this.buildAnnouncementsStepOne}
              />
          </Menu.Header>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>
            <Menu.Item
                name='gameSettings'
                onClick={this.buildGamesStepOne}
              />
          </Menu.Header>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>
            <Menu.Item
                name='tournamentSettings'
                onClick={this.buildTournamentsStepOne}
              />
          </Menu.Header>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>
            <Menu.Item
                name='coachSettings'
                onClick={this.buildCoachesStepOne}
              />
          </Menu.Header>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>
            <Menu.Item
                name='miscellaneousSettings'
                onClick={this.buildMiscellaneous}
              />
          </Menu.Header>
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AdminDash)