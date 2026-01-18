async function getData() {
  const response = await fetch('http://localhost:4001/');
  const result = await response.json();
  
  console.log(result)
  return result;
}

getData();