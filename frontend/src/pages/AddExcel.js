import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";


function AddExcel() {

    var bodyFormData = new FormData();

    bodyFormData.append('userName', 'Fred');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const data = {
        //   modelAdi: modelAdi,
        //   markaPk: {
        //     markaPk: markaPk
        //   },
        };
        axios({
            method: 'post',
            url: 'http://localhost:8080/import-excel',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
      };
  return <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="50vh"
  >
  <div>
	<Button 
  variant="contained"
  component="label"
  sx={{ mr: 2 }}
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button>
<Button
sx={{ ml: 2 }}
  variant="contained"
  component="label"
  type="button"
  onClick={handleOnSubmit}>
    AddExcel
  </Button>
  </div>
  </Box>
}

export default AddExcel;
