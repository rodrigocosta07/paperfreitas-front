import { Button, Grid, TextField, Typography } from "@mui/material";
import DialogComponent from "../../components/dialog";
interface IFormProduct {
  open: boolean;
  handleCloseForm: () => void;
}
function FormProduct(props: IFormProduct) {
  const { open, handleCloseForm } = props;
  return (
    <DialogComponent
      fullScreen={true}
      handleClose={handleCloseForm}
      open={open}
    >
      <div style={{ width: "100%", padding: 16 , display: 'flex', justifyContent:"center"}}>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          gap="10px"
          maxWidth={600}
          width={"100%"}
        >
          <Typography variant="h6">Criar Produto</Typography>
          <TextField type="text" id="name" placeholder="Nome" />
          <TextField type="text" id="price" placeholder="Preço" />
          <TextField type="text" id="code" placeholder="Codigo" />
          <Button variant="contained">Salvar</Button>
          <Button onClick={handleCloseForm} variant="contained" color="error">
            Cancelar
          </Button>
        </Grid>
      </div>
    </DialogComponent>
  );
}

export default FormProduct;
