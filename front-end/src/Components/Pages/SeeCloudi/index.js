import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCloudiByID } from '../../../redux/action/cloudiAction';
import Spinner from '../../../Factory/Spinner';

class SeeCloudi extends Component {

  state = {
    title: '',
    image: '',
    isFetching: null
  }

  componentDidMount() {

    console.log(this.props)

    if (this.props.location.state !== undefined) {
      this.setState({
        title: this.props.location.state.title,
        image: this.props.location.state.image
      })
    } else {

      this.setState({
        isFetching: true
      })
      this.props.getCloudiByID(this.props.match.params.id)
                
                .then(cloudi => {
                    
                  this.setState({
                    title: cloudi.title,
                    image: cloudi.image,
                    isFetching: false
                  })
                })
                .catch(error => {
                  console.log(error)
                })
    }

  }

  render() {
   
    const { title, image, isFetching } = this.state

    let cloudiInfo = (
        <div className='App'>
        <h1>title {title}</h1>
        <div><img src={image} alt="hamster"/></div>
      </div>
    )

    return (
     isFetching ? <Spinner /> : cloudiInfo
    )
  }
}

export default connect(null, { getCloudiByID })(SeeCloudi);