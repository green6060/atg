import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleHeaderVertical extends Component {

  //Contstructor

  //State Declaration

  //Lifecycle Functions

  //Functions
  handleItemClick = (name) => this.setState({ activeItem: name })

  //Primary Render
  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Announcements</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='viewAnnouncements'
              active={activeItem === 'viewAnnouncements'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='addDeleteOrEditAnnouncements'
              active={activeItem === 'addDeleteOrEditAnnouncements'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Tournaments</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='viewTournaments'
              active={activeItem === 'viewTournaments'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='addDeleteOrEditTournaments'
              active={activeItem === 'addDeleteOrEditTournaments'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Coaching</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='viewCoaches'
              active={activeItem === 'viewCoaches'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='addDeleteOrEditCoaches'
              active={activeItem === 'addDeleteOrEditCoaches'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Other</Menu.Header>

          <Menu.Menu>
            <Menu.Item 
              name='titleSettings' 
              active={activeItem === 'titleSettings'} 
              onClick={this.handleItemClick}>
            </Menu.Item>

            <Menu.Item 
              name='punishmentSettings' 
              active={activeItem === 'punishmentSettings'} 
              onClick={this.handleItemClick}>
            </Menu.Item>

            <Menu.Item 
              name='permissions' 
              active={activeItem === 'permissions'} 
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Menu.Menu>

        </Menu.Item>
      </Menu>
    )
  }
}