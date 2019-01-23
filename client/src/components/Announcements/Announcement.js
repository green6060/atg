import React, { Component } from 'react'
import {
  Grid,
  Segment,
  Header,
  Divider,
  Button,
} from 'semantic-ui-react'
import { formatDateDisplay } from '../../utils/time'
import Axios from 'axios'

export class Announcement extends Component {

  state = {
    announcement: [],
    comments: [],
  }
  
  componentDidMount() {
    const announcement_id = this.props.match.params.id

    // Axios.get(`/api/announcements/${announcement_id}`)
    //   .then( res => this.setState({ announcement: res.data }) )
    Axios.get(`/api/comments/${announcement_id}`)
    .then( res => this.setState({ comments: res.data }) )

    // Axios.all([
    //   Axios.get(`/api/announcements/${announcement_id}`),
    //   Axios.get(`/api/comments/${announcement_id}`)
    // ])
    // .then(axios.spread(function (announcementResponse, commentResponse) {
    //   //... but this callback will be executed only when both requests are complete.
    //   console.log('Announcement: ', announcementResponse.data);
    //   console.log('Repositories', commentResponse.data);
    // }));
  }

  render() {
    const { announcement } = this.state
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
              {/* <Divider/>
              <div>{`ATG_${announcement.username}`}</div> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Announcement
