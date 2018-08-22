import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";

class LogoutPage extends Component {
    state = {
        redirect: false
    }

    componentDidMount = () => {
        this.props.action( {email: "", token: ""} )
        this.setState({redirect: true})
    }

  render() {
      if (this.state.redirect) return(<Redirect push to='/' />)

  return(
        <div>
          <TopNavbar userName={this.props.userState.userData.name}/>
          <Header />
          <BottomNavbar />
        </div>
      )
  }
}
  
export default LogoutPage;