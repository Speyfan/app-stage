import React from 'react';
import { Component } from 'react';

import { CardList } from '../card-list/card-list';

export class Fetch extends Component {

    constructor() {
      super();
      this.state = {
        hasError: false,
        posts: [ ]
      }
    }
    
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      //On verifie que l'URL correspond a quelque chose
      .catch(error =>{
        this.setState({hasError: true});
      })
      .then(response => this.setState({ posts: response}))
      
    }
  
  
    render() {
        //Si on a eu une erreur lors du fetch, on stop
        if (this.state.hasError){
            return(
                <div>
                    URL incorrecte
                </div>
            )
        }
        //Sinon on vérifie que l'on a pas un tableau vide
        if (this.state.posts.length >= 1 ) {
            return(
                <div className='App'>
                    <CardList posts={this.state.posts}/>
                </div>
            
            )
        }
        else {
            return (
                <div>
                    URL incorrecte
                </div>
            )
        }
    }
  }