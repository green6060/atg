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
import { formatDateDisplay } from '../utils/time'
import axios from 'axios'


class Announcements extends React.Component {
  constructor(props) {
    super(props)
    // this.updateAnnouncementsOnPage = this.updateAnnouncementsOnPage.bind(this)
  }

  state = { creatingAnnouncement: false, announcements: []}

  componentDidMount() {
    axios.get('/api/announcements')
      .then( res => this.setState({ announcements: res.data }) )
  }

  handleDelete = (announcementId) => {
    axios.delete(`/api/announcements/${announcementId}`)
    this.updateAnnouncementsOnPage()
  }

  showAnnouncements = () => {
    const { announcements } = this.state
    if (announcements){
      return announcements.map( announcement => {
        return (
          <Segment key={announcement.id}>
            <Grid key={announcement.id} columns={2}>
              <Grid.Row>
                {/* <Grid.Column textAlign='center' width={2}>
                  <Image src={announcement.image} alt="user image" size="tiny" circular centered bordered />
                </Grid.Column> */}
                <Grid.Column width={16}>
                  {/* <div>{`${announcement.first_name} ${announcement.last_name}`}</div> */}
                  <div>{formatDateDisplay(announcement.created_at)}</div>
                  <Divider/>
                  <div>{announcement.body}</div>
                  <Divider/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider hidden/>
            <div>
              <Button
                as={Link}
                to={`/api/announcements/${announcement.id}`}
                size='mini'
              >
                  Comments
              </Button>
              <Button
                size='mini'
                onClick={() => this.handleEdit(announcement.id)}
              >
                  Edit
              </Button>
              <Button
                size='mini'
                onClick={() => this.handleDelete(announcement.id)}
              >
                Delete
              </Button>
            </div>
          </Segment>
        )}
      )
    }
  }

  updateAnnouncementsOnPage() {
    axios.get('/api/announcements')
      .then( res => this.setState({ announcements: res.data }) )
  }

  handleSubmit = (announcement) => {
    axios.post(`/api/announcements`, announcement)
    this.updateAnnouncementsOnPage()
  }

  toggleForm = (announcement) => {
    if (announcement){ 
      this.handleSubmit(announcement)
      this.setState( state => ({ creatingAnnouncement: !state.creatingAnnouncement}) )
    } else { 
      this.setState( state => ({ creatingAnnouncement: !state.creatingAnnouncement}) )
    }
  }

  render () {
    const { creatingAnnouncement } = this.state
    const { level } = this.props.user
    return (
      <>
        { creatingAnnouncement ? 
          <AnnouncementForm 
          toggleForm={this.toggleForm}
          />
          :
          <>
            <Header as='h1'> 
              Announcements
              { level > 1 &&
              <Button floated='right' onClick={this.toggleForm}>
              Add Announcement
              </Button>
            }
              

            </Header>
            <Divider />
            {this.showAnnouncements()}
          </>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Announcements)