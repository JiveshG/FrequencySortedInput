import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Alert} from "react-bootstrap";

let myDictionary: { [index: string]: number; } = {};
function App() {
  const [newInput, setNewInput] = React.useState('');
  const [outputArr, setOutputArr] = React.useState('');
  const [countDict, setCountDict] = React.useState(myDictionary);

  const updateOutput = () => {
    let sorted = Object.keys(countDict).sort((a, b) => countDict[b] - countDict[a])
    
   let res = "";
   for (let letter of sorted) {
      for (let count = 0; count < countDict[letter]; count++) {
         res += `${res.length > 0 ?', ':''}${letter}`
      }
   } 
    setOutputArr(res)
  }
  const handelSubmit = () => {
    
    let tempDic= countDict;

    tempDic[newInput ?? ''] = (tempDic[newInput ?? ''] || 0) + 1;
    setCountDict(tempDic);
    setNewInput(''); 
    updateOutput()
  }


  


  return (
    <div className="App">
      <header className="App-header">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="input-text">Input</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Input"
            aria-label="Input"
            aria-describedby="input-text"
            value={newInput}
            onChange={(event) => setNewInput(event.target.value)}
          />
        </InputGroup>
        <Button variant="primary" onClick={handelSubmit}>Submit</Button>

        <Alert variant='secondary'>
          {outputArr}
        </Alert>
      </header>
    </div>
  );
}

export default App;
