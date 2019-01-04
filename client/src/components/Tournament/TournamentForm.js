import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
    Container,
    Form,
    Segment,
    Header,
    Button,
    Input,
} from 'semantic-ui-react'
import { stat } from 'fs';


class TournamentForm extends React.Component {
  state = { tournament_name: ''  }

  componentDidMount() {
    this.setState({ tournament_name: '' })
  }

  handleEditorChange = (e) => {
    const { value } = e.target
    this.setState({ tournament_name: value })
  }
  
  handleChange = (e) => {
    const { tournament_name, value } = e.target
    this.setState({ [tournament_name]: value })
  }

  handleSubmit = () => {
    const { tournament_name } = this.state
    //const { game_name } = this.props
    // const tournament = { tournament_name, game_name }
    // pass tournament object back to tournament component
    this.setState({ tournament_name: '' })
    // PostRequest(tournament)
  }

  render() {
    return (
      <Container>
        <Segment basic>
        <Header as='h1'>Create Tournament</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field control={Input} label='Tournament' onChange={this.handleEditorChange} 
            placeholder='Enter Your Tournament Here' />
            <Button type='submit'>Save</Button>
            <Button onClick={this.props.toggleForm}>Cancel</Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(TournamentForm)
