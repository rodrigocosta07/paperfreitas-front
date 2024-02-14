import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { listPages } from "../consts/pages";

interface IDrawerComponentProps {
  onHandlePage: (page: string) => void;
}
function DrawerComponent(props: IDrawerComponentProps) {
  const { onHandlePage } = props;
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        {listPages.map(({ name, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton onClick={() => onHandlePage(id)}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default DrawerComponent;
