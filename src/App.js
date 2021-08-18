import React, {useState, useEffect} from 'react';
import './App.css';
import Tree from './components/Tree/Tree';

function App() {

  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    fetch('https://test.defontana.com/')
    .then(response => response.json())
    .then(apidata => setTreeData(apidata.data));
  }, [])

  const tData = [];
  const createDataTree = (dataset) => {
    const hashTable = Object.create(null);
    dataset.forEach(aData => hashTable[aData.ID] = {...aData, childNodes: []});
    
    dataset.forEach(aData => {
      if(aData.Parent) hashTable[aData.Parent].childNodes.push(hashTable[aData.ID])
      else tData.push(hashTable[aData.ID])
    });
    return tData;
  };

  createDataTree(treeData);

  return (
    <div className="App">
      <Tree tData = {tData}/>
    </div>
  );
}

export default App;
