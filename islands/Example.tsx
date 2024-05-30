import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "https://esm.sh/@headlessui/react@2.0.4?external=react,react-dom";
import { IS_BROWSER } from "$fresh/runtime.ts";
// import { useState } from 'react'

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export default function Example() {
  // const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [selectedPerson, setSelectedPerson] = [people[0], () => {}];

  console.log(IS_BROWSER, "\n 2592ac !@#\n");
  if (!IS_BROWSER) {
    return <div>hi</div>;
  }
  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <ListboxButton>{selectedPerson.name}</ListboxButton>
      <ListboxOptions anchor="bottom">
        {people.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className="data-[focus]:bg-blue-100"
          >
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
