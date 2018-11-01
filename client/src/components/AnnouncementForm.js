import React from 'react'
import {
    Container,
    Form,
    Segment,
    Header,
    Button,
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

  handleEditorChange = (ed) => {
    this.setState({ body: ed.renderOutRaw() })
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    const { dispatch, toggleForm, user } = this.props
    e.preventDefault()
    const announcement = this.state
    dispatch(addAnnouncement({...announcement, user_id: user.id }))
    this.setState({ body: '' })
    toggleForm()
  }

  render() {
    return (
      <Container>
        <Segment basic>
        <Header as='h1'>Create Announcement</Header>
          <Form onSubmit={this.handleSubmit}>
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
