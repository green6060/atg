import React, { Component } from 'react'
import {
  Grid,
  Segment,
  Header,
  Divider,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { formatDateDisplay } from '../../utils/time'
import Axios from 'axios'

export class Announcement extends Component {

  state = {
    announcement: []
  }
  
  componentDidMount() {
    const announcement_id = this.props.match.params.id
    Axios.get(`/api/announcements/${announcement_id}`)
      .then( res => this.setState({ announcement: res.data }) )
  }

  render() {
    const { announcement } = this.state
    debugger
    return (
      <Segment>
        <Grid columns={1}>
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
      </Segment>
    )
  }
}

export default Announcement
