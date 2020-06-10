import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import MoodChoice from "./MoodChoice";
import FeelingChoice from "./FeelingChoice";
import OptionalComment from "./OptionalComment";
import Submit from "./Submit";

const steps = [
  { id: "Mood" },
  { id: "Feelings" },
  { id: "AdditionalInformations" },
  { id: "Submit" }
];

const defaultData = {
    selectedMood: "",
    selectedFeelings: [],
    additionalComment: ""
};

const Form = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "Mood":
      return <MoodChoice {...props} />;
    case "Feelings":
      return <FeelingChoice {...props} />;
    case "AdditionalInformations":
      return <OptionalComment {...props} />;
    case "Submit":
        return <Submit {...props} />;
    default:
      return null;
  }
};

export default Form;