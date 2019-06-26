import React, { Component, Fragment } from 'react'

class Dropdown extends Component {
   constructor(props) {
      super(props)
      this.state = {
         cities: ['Karachi', 'Manchester', 'New York', 'Berlin', 'Mumbai'],
         toggleList: false
      }
   }

   toggleList = () => this.setState({ toggleList: !this.state.toggleList })

   onSelect = (item) => {
      this.props.onSelectCity(item)
      this.setState({
         toggleList: !this.state.toggleList
      })
   }

   render() {
      return (
         <Fragment>
            <h4 onClick={this.toggleList} className='input-item'>{this.props.favoriteCity}</h4>
            {this.state.toggleList &&
               <ul className='list'>{this.state.cities.map((item, index) => {
                  return (
                     <li
                        className='list-item'
                        key={index}
                        onClick={() => this.onSelect(item)}
                     >
                        {item}
                     </li>
                  )
               })}</ul>
            }
         </Fragment>
      )
   }
}

export default Dropdown
