import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import MoodChoice from "./MoodChoice";
import FeelingChoice from "./FeelingChoice";
import OptionalComment from "./OptionalComment";
import Submit from "./Submit";

import FeelingModel from "../model/FeelingModel"

import EventService from "../services/EventService"

const steps = [
  { id: "Mood" },
  { id: "Feelings" },
  { id: "AdditionalInformations" },
  { id: "Success" },
  { id: "Failure" }

];

const defaultData = new FeelingModel();

const Form = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const eventService = new EventService()

  const onSubmit = () => {
    eventService.addEvent(formData).then(() => {
      navigation.go("Success");
    })
    .catch(() => {
      navigation.go("Failure");
    })
  }

  const props = { formData, setForm, navigation, onSubmit };

  switch (id) {
    case "Mood":
      return <MoodChoice {...props} />;
    case "Feelings":
      return <FeelingChoice {...props} />;
    case "AdditionalInformations":
      return <OptionalComment {...props} />;
    case "Success":
        return <Submit success={true} {...props} />;
    case "Failure":
        return <Submit success={false} {...props} />;
    default:
      return null;
  }
};

export default Form;