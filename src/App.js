import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import Home from './Components/Home';

export default class App extends Component {
  pageSize = 15;
  state = {
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          {/* <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/> */}
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={15} country='in' category='general'/>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={15} country='in' category='business'/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={15} country='in' category='entertainment'/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={15} country='in' category='health'/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={15} country='in' category='science'/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={15} country='in' category='sports'/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={15} country='in' category='technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

