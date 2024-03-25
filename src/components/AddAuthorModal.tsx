import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Author } from "../utils/types";

interface AddAuthorModalProps {
  open: boolean;
  name?: string;
  handleClose: () => void;
  addAuthor: (author: Author) => void;
}

const AddAuthorModal = ({
  open,
  handleClose,
  addAuthor,
  name,
}: AddAuthorModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<Author>();

  useEffect(() => {
    if (name) {
      setValue("name", name);
    }
  }, [name]);

  const onSubmit: SubmitHandler<Author> = (data) => {
    addAuthor(data);
    reset();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Author</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            variant="outlined"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name ? "This field is required" : ""}
          />
          <TextField
            margin="dense"
            label="Birth Date"
            fullWidth
            variant="outlined"
            {...register("birth_date", { required: true, pattern: /^\d+$/ })}
            error={!!errors.birth_date}
            helperText={errors.birth_date ? "Only numbers are allowed" : ""}
          />
          <TextField
            margin="dense"
            label="Death Date"
            fullWidth
            variant="outlined"
            {...register("death_date", { pattern: /^\d+$/ })}
            error={!!errors.death_date}
            helperText={errors.death_date ? "Only numbers are allowed" : ""}
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAuthorModal;
