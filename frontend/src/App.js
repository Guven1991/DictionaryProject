import { Button } from "@mui/material";


function App() {
  return <div>
	<Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button>
  </div>;
  
}

export default App;
