import { Modal } from "@mui/material";
import { useContext, useState } from "react";
import HabitForm from "../components/HabitsForm";
import { ACTION_TYPES } from "../utils/constant";
import { HabitsContext } from "../context/HabitsContext";
import HabitsCard from "../components/HabitsCard";
import { AiOutlinePlus } from "react-icons/ai";

function HomePage() {
  const [open, setOpen] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const { dispatch, habitsData } = useContext(HabitsContext);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setSelectedHabit(null);
    setOpen(false);
  }

  function handleEditHabit(habit) {
    setSelectedHabit(habit);
    setOpen(true);
  }

  function handleSaveHabit(habit) {
    dispatch({
      type: selectedHabit ? ACTION_TYPES.UPDATE_HABIT : ACTION_TYPES.ADD_HABIT,
      payload: habit,
    });

    setSelectedHabit(null);
    setOpen(false);
  }

  function handleDeleteHabit(id) {
    dispatch({ type: ACTION_TYPES.DELETE_HABIT_FROM_MAIN, payload: id });
  }

  function handleMoveToArchive(id) {
    dispatch({ type: ACTION_TYPES.SEND_TO_ARCHIVE, payload: id });
  }

  const habitsMapped = habitsData.length ? (
    habitsData.map((habit) => (
      <div key={habit.id} className="w-full md:w-[50%]">
        <HabitsCard
          habit={habit}
          onEdit={handleEditHabit}
          onDelete={handleDeleteHabit}
          onMoveArchive={handleMoveToArchive}
        />
      </div>
    ))
  ) : (
    <p>No Habits Found. Create a new habit.</p>
  );

  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center w-full">
      <button
        className="flex gap-3 justify-center text-md bg-blue-500 px-4 py-2 hover:bg-blue-600 text-white rounded-lg md:w-[50%]"
        onClick={handleOpen}
      >
        <AiOutlinePlus size={25} />
        Create a New Habit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-create-new-habit"
        aria-describedby="modal-modal-create-new-habit"
      >
        <HabitForm
          habitData={selectedHabit}
          onSave={handleSaveHabit}
          onClose={handleClose}
        />
      </Modal>

      {habitsMapped}
    </div>
  );
}

export default HomePage;
