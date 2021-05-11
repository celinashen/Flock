import React, {useState} from 'react';
import { db, firebaseAppAuth, providers } from '../pages/firebaseConfig.js';
import Dropdown from 'react-dropdown';
import firebase from 'firebase'


var defaultOption = "Please select a flock.";



  class Dropdowns extends React.Component {
    state = {
        flock: null,
    };
    handleChange = selectedOptionFlock => {
        this.setState({ flock: selectedOptionFlock.value });
        console.log(`Option selected:`, selectedOptionFlock.value);
        
    };

    getFlockLists() {
        var user = firebase.auth().currentUser;
        var flockIDs = [];
        var tempObject = {};

        //Scan through database for user profileMatch, then load user-specific flocks.
        db.collection('user').get().then(querySnapshot =>{
            querySnapshot.forEach(doc => {
                if (doc.data()!=null && user!=null)
                    if (doc.data().id == user.uid) 
                        doc.data().flocks.forEach(doc2 => {
                            db.collection('flock-groups').get().then(querySnapshot2 => {
                                querySnapshot2.forEach(doc3 => {
                                    if (doc2 == doc3.id) {
                                        tempObject = {value: doc2, label: doc3.data().flockName};
                                        flockIDs.push(tempObject);
                                        //console.log(tempObject);
                                    }

                                })
                            })
                        });                        
                    
            })
        })//end of firebase ref

        //console.log(flockIDs);
        return flockIDs;
    }


    render() {
      const { selectedOptionFlock } = this.state;
      
      return (
          <div className = "Dropdown-Container">
            <div>
                <Dropdown value={selectedOptionFlock} placeholder={defaultOption}
                onChange={this.handleChange} options={this.getFlockLists()}/>
            </div>
          </div>

      );
    }

  }
  




  /*
  class Dropdowns extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              countries : [],
              states : [],
              selectedCountry : '--Choose Country--',
              selectedState : '--Choose State--'
          };
          this.changeCountry = this.changeCountry.bind(this);
          this.changeState = this.changeState.bind(this);
      }


      formatData(){
        var finalArray = [];
        var tempObject = {};
        var nestedTempObject = {};
        db.collection('user').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.data().flocks.forEach(flock => {
                    db.collection('flock-groups').get().then(nestedQuerySnapshot => {
                        nestedQuerySnapshot.forEach(nestedDoc => {
                            if (flock == nestedDoc.id && flock!=undefined) {
                                tempObject["id"] = flock;
                                Object.defineProperties(tempObject, {
                                    id: {
                                        value: flock,
                                        writable: true,
                                    }
                                })
                                nestedTempObject["members"] = nestedDoc.data().members;
                                Object.assign(nestedTempObject["members"], nestedDoc.data().members);
                                tempObject["states"] = [nestedTempObject];
                                Object.assign(tempObject["states"], [nestedTempObject]);
                            }
                        })
                        finalArray.push(tempObject);
                        console.log(tempObject);            
                    })
                })
            })
        })
        console.log(finalArray);
        return finalArray;
    }//end of method formatData
 

    
      componentDidMount() {
          this.setState({
            countries : this.formatData(),
            
              countries : [
                  { id: 'Germany', states: [ {members: 'A'} ] },
                  { id: 'Spain', states: [ {members: 'B'} ] },
                  { id: 'USA', states: [ {members: 'C'} ] },
                  { id: 'Mexico', states: [ {members: 'D'} ] },
                  { id: 'India', states: [ {members: 'E'} ] },
              ]
          });
      }
    
      changeCountry(event) {
          this.setState({selectedCountry: event.target.value});
          this.setState({states : this.state.countries.find(cntry => cntry.id === event.target.value).states});
      }
  
      changeState(event) {
          this.setState({selectedState: event.target.value});
          //const stats = this.state.countries.find(cntry => cntry.members === this.state.selectedCountry).states;
          console.log(this.state.selectedState);
      }
      
      render() {
          return (
              <div id="container">
                  <h2>Cascading or Dependent Dropdown using React</h2>
      
                  <div>
                      <label>Country</label>
                      <select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                          <option>--Choose Country--</option>
                          {this.state.countries.map((e, key) => {
                              return <option key={key}>{e.id}</option>;
                          })}
                      </select>
                  </div>
  
                  <div>
                      <label>State</label>
                      <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                          <option>--Choose State--</option>
                          {this.state.states.map((e, key) => {
                              return <option key={key}>{e.members}</option>;
                          })}
                      </select>
                  </div>
                </div>
          )
      }
  }
  */
  


  export default Dropdowns;