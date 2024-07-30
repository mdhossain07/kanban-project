import { Field, Label } from "@headlessui/react";
import React from "react";
import { Controller } from "react-hook-form";

const FormController = ({ name, title, children, control }) => {
  return (
    <Field>
      <Label className="text-sm/6 font-medium">{title}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => React.cloneElement(children, { ...field })}
      />
    </Field>
  );
};

export default FormController;
