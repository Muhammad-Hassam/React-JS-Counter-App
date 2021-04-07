import './App.css';
import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';




function App() {
  const [Count,setCount]=useState(0);
  const [update, setUpdate]=useState("Your Count")
  
  const increase=()=>{
    setCount(Count+1);
    setUpdate("You increased the count");
  }
  const decrease=()=>{
    if (Count===0){
     setUpdate(`Can't decrease the count`)
    }
    else{
    setCount(Count-1);
    setUpdate("You decreased the count");
    }
  }

  const marg={
    marginLeft:'5rem',
};

const updateCss={
  marginBottom: '5rem'
}
  
  return (
    <>
    <Container maxWidth='sm'>
    <div className="main-div">
    <Grid item container direction="column" justify="center" alignItems="center">
      <h1>Counter App</h1>
    </Grid>
    <Grid item container direction="column" justify="center" alignItems="center">
      <h3 className='headings'>{Count}</h3>
    </Grid>
    <Grid item container direction="column" justify="center" alignItems="center" style={updateCss}>
      <h3>{update}</h3>
    </Grid>
    <Grid item container direction="row" justify="center" alignItems="center">
      <Fab variant="extended" color="primary" aria-label="Incre" onClick={increase} >
          <AddIcon />
          Increament
        </Fab> 
        <Fab variant="extended" color="secondary" aria-label="deccre" onClick={decrease} style={marg}>
          <RemoveIcon />
          Decreament
        </Fab> 
    </Grid>
    

    </div>
    </Container>
    </>
  );
}

export default App;
