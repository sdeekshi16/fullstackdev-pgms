
function number_table(number){  //add this entire fn
  var num_table=[]
  var i=1;
  for(i=1;i<=10;i++){
  var m=number*i
  num_table.push(<tr><td>{ number }*{i}</td><td>{m}</td></tr>)
  }
  return num_table;
  }
function App() { //and edit code inside return
  return (
  <div>    
  <h1> Number Table of:12</h1>
  <table border="1">
  <tr><td>Number</td><td>Result</td></tr>
  {number_table(12)}
  </table>
  </div>
  );
}

export default App;
