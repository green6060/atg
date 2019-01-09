import React from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Form,
    Segment,
    Header,
    Button,
    TextArea,
} from 'semantic-ui-react'

class AnnouncementForm extends React.Component {
  state = { body: '', user_id: ''  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({ user_id: this.props.user.id })
    }
    if (this.props.body) {
      this.setState({ body: this.props.body.body})
    }
  }

  handleEditorChange = (e) => {
    const { value } = e.target
    this.setState({ body: value })
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { toggleFormCreate } = this.props
    const { body, user_id } = this.state
    const { username } = this.props.user
    const announcement = { body, user_id, username }
    // pass announcement object back to announcement component
    this.setState({ body: '' })
    toggleFormCreate(announcement)
  }

  toggleFormOff = () => {
    this.setState(
      {
        editingAnnouncement: false,
        creatingAnnouncement: false,
      }
    )
  }

  render() {
    return (
      <Container>
        <Segment basic>
        <Header as='h1'>Announcement</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field control={TextArea} value={this.state.body} label='Announcement' onChange={this.handleEditorChange} 
            placeholder='Enter Your Announcement Here' />
            <Button type='submit'>Save</Button>
            <Button onClick={this.props.toggleFormOff}>Cancel</Button>
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

export default connect(mapStateToProps)(AnnouncementForm)
