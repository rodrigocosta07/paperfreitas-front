import { Dialog } from "@mui/material";
interface IDialogProps {
  handleClose: () => void;
  open: boolean;
  children: string | JSX.Element | JSX.Element[];
  fullScreen: boolean;
}
function DialogComponent(props: IDialogProps) {
  const { open, handleClose, children, fullScreen } = props;
  return (
    <Dialog fullScreen={fullScreen} onClose={handleClose} open={open}>
      {children}
    </Dialog>
  );
}

export default DialogComponent;
