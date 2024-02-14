import { Box, Button, Container, TextField, Typography } from "@mui/material";
import TableComponent from "../../components/table";
import FormProduct from "./form";
import { useState } from "react";

function Products() {
  const [isOpenFormProduct, setIsOpenFormProduct] = useState(false);
  const handleFormProduct = () => {
    setIsOpenFormProduct(!isOpenFormProduct);
  };

  return (
    <Container sx={{ gap: "10px", padding: 0 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <Typography variant="h2">Produtos</Typography>
          <div>
            <Button onClick={handleFormProduct} variant="outlined" size="small">
              <Typography variant="body1">Adicionar Produto</Typography>
            </Button>
          </div>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField></TextField>
          <Button variant="contained">Buscar</Button>
        </Box>
      </Box>
      <TableComponent />
      {isOpenFormProduct && (
        <FormProduct
          open={isOpenFormProduct}
          handleCloseForm={handleFormProduct}
        />
      )}
    </Container>
  );
}
export default Products;
