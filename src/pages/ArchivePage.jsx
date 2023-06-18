import { useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";
import { ACTION_TYPES } from "../utils/constant";
import HabitsCard from "../components/HabitsCard";

function ArchivePage() {
  const { dispatch, archiveData } = useContext(HabitsContext);

  function handleDeleteHabit(id) {
    dispatch({ type: ACTION_TYPES.DELETE_HABIT_FROM_ARCHIVE, payload: id });
  }

  function handleMoveToMain(id) {
    dispatch({ type: ACTION_TYPES.ARCHIVE_TO_MAIN, payload: id });
  }

  const archiveDataMapped = archiveData.length ? (
    archiveData.map((habit) => (
      <div key={habit.id} className="w-full">
        <HabitsCard
          habit={habit}
          isArchivePage
          onDelete={handleDeleteHabit}
          onMoveArchive={handleMoveToMain}
        />
      </div>
    ))
  ) : (
    <p>No Habits in Archive</p>
  );

  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center w-full">
      <div className="w-full">{archiveDataMapped}</div>
    </div>
  );
}

export default ArchivePage;
