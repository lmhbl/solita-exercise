import React from 'react';
import axios from 'axios';
import Exercise1 from './Exercise1'
import Exercise2 from './Exercise2'
import Exercise3 from './Exercise3'
import Exercise4 from './Exercise4'
import { Accordion, AccordionSummary, AccordionDetails, Container } from '@material-ui/core';




class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      names : [],
      sortedNames : [],
      alphabeticallySortedNames: [],
      totalAmount: 0,
      searchName: "",
      nameAmount: 0,
  }

  }
  
  componentDidMount(){
    axios.get('http://localhost:3001/names')
    .then(res => {
      this.setState({names: res.data})
      console.log(res.data);

      this.sortByAmount();
      this.sortAlphabetically();
      this.calculateAmount();
    })
  }
  // sort names and amounts by amount
  sortByAmount = () => {
    let namesCopy = this.state.names.map((names => names));    
    namesCopy.sort((a, b) => b.amount - a.amount);
    this.setState({sortedNames: namesCopy});
    console.log(this.state.sortedNames);
  }
  // sort names alpabetically
  sortAlphabetically = () => {
    let namesCopy = this.state.names.map((names => names));
    namesCopy.sort((a,b) => a.name.localeCompare(b.name));    
    this.setState({alphabeticallySortedNames: namesCopy});
    
  }
  // calculate the total number of people on the names list
  calculateAmount = () => {
    let amounts = this.state.names.map((names => names.amount));
    let totalAmount = 0;
    for (let amount of amounts) {
       totalAmount = totalAmount + amount;
     };
    this.setState({totalAmount: totalAmount})
    
  }
  
  handleInputChange = (e) => {
    this.setState({searchName: e.target.value});
  }

  getAmount = (e) => {
    e.preventDefault();
    
    let nameObj = this.state.names.filter((name => name.name === this.state.searchName));    
    let nameAmount = nameObj.map((amount) => amount.amount)
    if(nameAmount.length === 0) {
      this.setState({nameAmount: 0})
    }else {
      this.setState({nameAmount: nameAmount})
    }
    console.log(nameAmount.length)
    console.log(this.state.nameAmount)
  }

  render(){
    
    return (
      <div>
        <Container maxWidth='sm'>
          <h1>Name Application</h1>
          <Accordion>
            <AccordionSummary>          
              <h2>Exercise 1</h2>
            </AccordionSummary>
            <AccordionDetails>
              <Exercise1 names={this.state.sortedNames} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <h2>Exercise 2</h2>
            </AccordionSummary>
            <AccordionDetails>
              <Exercise2 names={this.state.alphabeticallySortedNames} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <h2>Exercise 3</h2>
            </AccordionSummary>
            <AccordionDetails>
              <Exercise3 totalAmount={this.state.totalAmount} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <h2>Exercise 4</h2>
            </AccordionSummary>
            <AccordionDetails>
            <Exercise4 onSubmit={this.getAmount}
                    handleInputChange={this.handleInputChange}
                    nameAmount={this.state.nameAmount}/>
            </AccordionDetails>
          </Accordion>
        
        </Container> 
      </div>
      
    )
 
  } 
}

export default App;
