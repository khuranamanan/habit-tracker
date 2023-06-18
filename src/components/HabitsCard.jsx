import React from "react";
import { BiEdit, BiTrash, BiArchive } from "react-icons/bi";
import { GrRevert } from "react-icons/gr";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function HabitsCard({ habit, onEdit, onDelete, onMoveArchive, isArchivePage }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleEdit(e) {
    e.stopPropagation();
    onEdit(habit);
  }

  function handleDelete(e) {
    e.stopPropagation();

    onDelete(habit.id);
  }

  function handleMoveToArchive(e) {
    e.stopPropagation();
    onMoveArchive(habit.id);
  }

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-4 w-full cursor-pointer flex  flex-col items-center sm:justify-between sm:flex-row"
        onClick={handleOpen}
      >
        <h3 className="text-lg font-medium">{habit.name}</h3>

        <div className="flex justify-end mt-4 gap-4">
          {!isArchivePage && (
            <button
              className="text-blue-500 mr-2 hover:text-blue-700 flex gap-2 justify-center items-center p-2 hover:bg-gray-200 rounded-lg"
              onClick={handleEdit}
            >
              <BiEdit /> Edit
            </button>
          )}
          <button
            className="text-red-500 mr-2 hover:text-red-700 flex gap-2 justify-center items-center p-2 hover:bg-gray-200 rounded-lg"
            onClick={handleDelete}
          >
            <BiTrash /> Delete
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 flex gap-2 justify-center items-center p-2 hover:bg-gray-200 rounded-lg"
            onClick={handleMoveToArchive}
          >
            {isArchivePage ? (
              <span className="flex gap-2 justify-center items-center">
                <GrRevert /> UnArchive
              </span>
            ) : (
              <span className="flex gap-2 justify-center items-center">
                <BiArchive /> Move to Archive
              </span>
            )}
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="text-lg font-medium">{habit.name}</h3>
          <p className="text-sm text-gray-500">Goal: {habit.goal}</p>
          <p className="text-sm text-gray-500">Frequency: {habit.frequency}</p>
          <p className="text-sm text-gray-500">Start Date: {habit.start}</p>
        </Box>
      </Modal>
    </>
  );
}

export default HabitsCard;
