import React from 'react'
import axios from 'axios'
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
  state = { body: '', user_id: '' }

  componentDidMount() {
    if (this.props.user) {
      this.setState({ user_id: this.props.user.id })
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

  handleSubmit = (e) => {
    e.preventDefault()
    const { toggleForm } = this.props
    const body = this.state.body
    const userId = this.state.user_id
    // addAnnouncement(announcement.body, user.id)
    axios.post(`/api/announcements`, { body, userId })
    this.setState({ body: '' })
    toggleForm()
  }

  render() {
    return (
      <Container>
        <Segment basic>
        <Header as='h1'>Create Announcement</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field control={TextArea} label='Announcement' onChange={this.handleEditorChange} 
            placeholder='Enter Your Announcement Here' />
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

export default connect(mapStateToProps)(AnnouncementForm)
