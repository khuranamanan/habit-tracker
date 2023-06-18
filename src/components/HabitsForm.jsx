import Box from "@mui/material/Box";

import { forwardRef, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

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

const HabitForm = forwardRef(({ habitData, onSave, onClose }, ref) => {
  const [habitForm, setHabitForm] = useState({
    habitName: habitData ? habitData.name : "",
    habitGoal: habitData ? habitData.goal : "daily",
    habitFrequency: habitData ? habitData.frequency : "",
    habitStart: habitData ? habitData.start : "",
  });

  const handleSave = () => {
    if (
      !habitForm.habitName.trim() ||
      !habitForm.habitFrequency.trim() ||
      !habitForm.habitStart.trim()
    ) {
      toast.error("Fill all Fields");
    }
    if (
      habitForm.habitName &&
      habitForm.habitFrequency &&
      habitForm.habitStart
    ) {
      const updatedHabit = {
        id: habitData ? habitData.id : uuid(),
        name: habitForm.habitName,
        goal: habitForm.habitGoal,
        frequency: habitForm.habitFrequency,
        start: habitForm.habitStart,
      };

      onSave(updatedHabit);
    }
  };

  return (
    <div ref={ref}>
      <Box sx={style} className="md:p-8">
        <h1 className="text-2xl mb-4">New Habit</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="habitName" className="block mb-2">
              Name of the habit:
            </label>
            <input
              type="text"
              id="habitName"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={habitForm.habitName}
              onChange={(e) =>
                setHabitForm({ ...habitForm, habitName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="habitGoal" className="block mb-2">
              Goal of the habit:
            </label>
            <select
              id="habitGoal"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={habitForm.habitGoal}
              onChange={(e) =>
                setHabitForm({ ...habitForm, habitGoal: e.target.value })
              }
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="habitFrequency" className="block mb-2">
              How many times do you want to perform the habit:
            </label>
            <input
              type="number"
              id="habitFrequency"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={habitForm.habitFrequency}
              onChange={(e) =>
                setHabitForm({ ...habitForm, habitFrequency: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="habitStart" className="block mb-2">
              Start Date:
            </label>
            <input
              type="date"
              id="habitStart"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={habitForm.habitStart}
              onChange={(e) =>
                setHabitForm({ ...habitForm, habitStart: e.target.value })
              }
            />
          </div>
        </form>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={onClose}
          >
            Discard
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleSave}
          >
            {habitData ? "Update" : "Create"}
          </button>
        </div>
      </Box>
    </div>
  );
});

export default HabitForm;
