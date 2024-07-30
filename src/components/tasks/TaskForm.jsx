import { Button, Input, Select, Textarea } from "@headlessui/react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { ChevronDownIcon } from "@radix-ui/themes";
import FormController from "./FormController";

const TaskForm = ({ setIsOpen }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      deadline: "",
      assign: "Maruf Ahmed",
      priority: "Low",
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg text-gray-900"
    >
      <FormController name="title" title="Title" control={control}>
        <Input
          required
          className={clsx(
            "mt-3 block w-full rounded-lg border-gray-400 bg-white/5 py-1.5 text-sm/6 ",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray/25"
          )}
        />
      </FormController>

      <FormController name="description" title="Description" control={control}>
        <Textarea
          required
          className={clsx(
            "mt-3 block w-full resize-none rounded-lg border-gray-400 bg-white/5 py-1.5 px-3 text-sm/6",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          rows={3}
        />
      </FormController>

      <FormController name="deadline" title="Deadline" control={control}>
        <Input
          required
          type="date"
          className={clsx(
            "mt-3 block w-full rounded-lg border-gray-400 bg-white/5 py-1.5 text-sm/6 ",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray/25"
          )}
        />
      </FormController>

      <FormController name="assign" title="Assign To" control={control}>
        <Select
          className={clsx(
            "mt-3 block w-full appearance-none rounded-lg border-gray-400 bg-white/5 py-1.5 px-3 text-sm/6 ",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            "*:text-black"
          )}
        >
          <option>Maruf Ahmed</option>
          <option>Abir Hossain</option>
          <option>Khairul Islam</option>
        </Select>
      </FormController>
      <ChevronDownIcon
        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
        aria-hidden="true"
      />

      <FormController name="priority" title="Priority" control={control}>
        <Select
          className={clsx(
            "mt-3 block w-full appearance-none rounded-lg border-gray-400 bg-white/5 py-1.5 px-3 text-sm/6 ",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            "*:text-black"
          )}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High States</option>
        </Select>
      </FormController>
      <ChevronDownIcon
        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
        aria-hidden="true"
      />

      <div className="mt-4 flex gap-3 justify-end ">
        <Button
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center gap-2 rounded-md bg-red-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          Cancel
        </Button>

        <Button
          type="submit"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
