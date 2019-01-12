import React from 'react'
import { connect } from 'react-redux'
import {
  Grid,
  Segment,
  Header,
  Divider,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AnnouncementForm from './AnnouncementForm'
import { formatDateDisplay } from '../../utils/time'
import Axios from 'axios'

class Announcements extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    creatingAnnouncement: false,
    editingAnnouncement: false,
    announcements: [], 
    announcementIdInEdit: '',
    announcementBodyInEdit: '',
  }

  componentDidMount() {
    Axios.get('/api/announcements')
      .then( res => this.setState({ announcements: res.data }) )
  }

  handleDelete = (announcementId) => {
    Axios.delete(`/api/announcements/${announcementId}`)
  }

  buildCrudButtons = (announcement) => {
    const { user } = this.props
    if (user.id === announcement.user_id) {
      return(
      <>
        <Button
        size='mini'
        onClick={() => this.toggleFormEdit(announcement.id, announcement.body)}
        >
          Edit
        </Button>

        <Button
        size='mini'
        onClick={() => this.handleDelete(announcement.id)}
        >
          Delete
        </Button>
      </>
      )
    } else if (user.level > 1) {
      return(
        <Button
        size='mini'
        onClick={() => this.handleDelete(announcement.id)}
        >
          Delete
        </Button>
        )
    }
  }

  showAnnouncements = () => {
    const { announcements } = this.state
  if (announcements) {
      return announcements.map( announcement => {
        return (
          <Segment key={announcement.id}>
            <Grid key={announcement.id} columns={2}>
              <Grid.Row>
                {/* <Grid.Column textAlign='center' width={2}>
                  <Image src={announcement.image} alt="user image" size="tiny" circular centered bordered />
                </Grid.Column> */}
                <Grid.Column width={16}>
                  <div>{formatDateDisplay(announcement.created_at)}</div>
                  <Divider/>
                  <div>{announcement.body}</div>
                  <Divider/>
                  <div>{`ATG_${announcement.username}`}</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider hidden/>
            <div>
              <Button
                as={Link}
                to={`/announcement/${announcement.id}`}
                size='mini'
              >
                  Comment
              </Button>
              {this.buildCrudButtons(announcement)}
            </div>
          </Segment>
        )}
      )
    }
  }

  updateAnnouncementsOnPage() {
    Axios.get('/api/announcements')
      .then( res => this.setState({ announcements: res.data }) )
  }

  handleSubmit = (announcement) => {
    Axios.post(`/api/announcements`, announcement)
    this.updateAnnouncementsOnPage()
  }

  toggleFormCreate = (announcement) => {
    if (announcement.body !== undefined){
      this.handleSubmit(announcement)
      this.setState(
        {
          editingAnnouncement: false,
          creatingAnnouncement: !this.state.creatingAnnouncement,
        } 
      )
    } else { 
      this.setState(
        {
          editingAnnouncement: false,
          creatingAnnouncement: !this.state.creatingAnnouncement,
        }
      )
    }
  }

  toggleFormEdit = (announcementId, body) => {
    this.setState(
      { 
        creatingAnnouncement: false,
        announcementIdInEdit: {announcementId},
        announcementBodyInEdit: {body},
        editingAnnouncement: !this.state.editingAnnouncement,
      } 
    )
  }

  render () {
    const { creatingAnnouncement } = this.state
    const { editingAnnouncement } = this.state
    const { level } = this.props.user

      {if (creatingAnnouncement === true){
        return(
        <AnnouncementForm 
          toggleFormCreate={this.toggleFormCreate}
        />
        )
      } else if (editingAnnouncement === true){
        return(
          <AnnouncementForm
            toggleFormCreate={this.toggleFormCreate}
            announcementId={this.state.announcementIdInEdit}
            body={this.state.announcementBodyInEdit}
          />
        )
      } else 
        return(
          <>
            <Header as='h1'> 
              Announcements
                {level > 1 &&
                  <Button floated='right' onClick={this.toggleFormCreate}>
                    Add Announcement
                  </Button>
                }
            </Header>

            <Divider />
            
            {this.showAnnouncements()}
          </>
        )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Announcements)