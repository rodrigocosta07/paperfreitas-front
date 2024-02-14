import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const testelist = [
  { name: "Caneta", price: "1,00", code: "123" },
  { name: "Lapis", price: "1,50", code: "321" },
  { name: "Borracha", price: "0,50", code: "5432" },
];
function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Codigo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testelist.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableComponent;
