import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import {
    Container,
    Form,
    Segment,
    Header,
    Button,
    Input,
} from 'semantic-ui-react'

class GameForm extends React.Component {
  state = { game_name: '' }

  componentDidMount() {
    this.setState({ game_name: '' })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ game_name: value })
  }

  handleSubmit = () => {
    const { game_name } = this.state
    const game = { game_name }
    this.setState({ game_name: '' })
    Axios.post(`/api/games`, game)
    
  }

  render() {
    return (
      <Container>
        <Segment basic>
        <Header as='h1'>Create Game</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field control={Input} label='Game' onChange={this.handleChange} 
            placeholder='Enter Your Game Here' />
            <Button type='submit'>Submit</Button>
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

export default connect(mapStateToProps)(GameForm)
