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
  state = { creatingAnnouncement: false, announcements: [], users: [] }

  componentDidMount() {
    axios.get('/api/announcements')
      .then( res => this.setState({ announcements: res.data }) )
  }

  // handleDelete = (announcement) => {
  //   const { dispatch } = this.props
  //   dispatch(deleteAnnouncement(announcement))
  // }

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
                to={`/courses/${announcement.course_id}/announcements/${announcement.id}`}
                size='mini'
              >
                  View
              </Button>
              <Button
                size='mini'
                onClick={() => this.handleDelete(announcement)}
                basic
                compact
              >
                Delete
              </Button>
            </div>
          </Segment>
        )}
      )
    }
  }

  toggleForm = () => {
    this.setState( state => ({ creatingAnnouncement: !state.creatingAnnouncement}) )
  }

  render () {
    const { creatingAnnouncement } = this.state

    return (
      <>
        { creatingAnnouncement ? 
          <AnnouncementForm toggleForm={this.toggleForm} />
          :
          <>
            <Header as='h1'> 
              Announcements 
              <Button floated='right' onClick={this.toggleForm}>
                Add Announcement
              </Button>
            </Header>
            <Divider />
            {this.showAnnouncements()}
          </>
        }
      </>
    )
  }
}

export default Announcements