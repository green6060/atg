import React from 'react'
import {
    Container,
    Form,
    Segment,
    Header,
    Button,
    TextArea,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addAnnouncement, } from '../reducers/announcements'

class AnnouncementForm extends React.Component {
  state = { body: '', users: [] }

  componentDidMount() {
    if (this.props.announcement) {
      this.setState({ ...this.props.announcement })
      this.editor.renderInRaw(this.props.announcement.body)
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
    const { dispatch, toggleForm, user } = this.props
    const announcement = this.state
    dispatch(addAnnouncement(announcement.body, user.id ))
    this.setState({ body: '' })
    toggleForm()
  }

  render() {
    return (
      <Container>
        <Segment basic>
        <Header as='h1'>Create Announcement</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field control={TextArea} label='Announcement' onChange={this.handleEditorChange} placeholder='Enter Your Announcement Here' />
            <Button type='submit'>Save</Button>
            <Button onClick={this.props.toggleForm}>Cancel</Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AnnouncementForm)
