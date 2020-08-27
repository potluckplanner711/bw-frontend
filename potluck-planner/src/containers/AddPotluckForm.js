import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { addEvent } from "../actions";
import { useLocalStorage } from "../hooks/useLocalStorage";
import moment from "moment";


const AddPotluckForm = props => {
  const today = moment(new Date()).format("YYYY-MM-DD");
  const [event, setEvent] = useState({
    event_name: "",
    date: today,
    time: "20:00",
    description: "",
    address: "",
    city: "",
    state: ""
  });

  const [, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");
  const eventInputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setEvent({ ...event, [name]: value });
  };

  return (
    <form className="flex flex-col items-center"
      onSubmit={e => {
        e.preventDefault();
        addEvent(dispatch, user_id, event);
        setEvent({
          event_name: "",
          date: "",
          time: "",
          description: "",
          address: "",
          city: "",
          state: ""
        });
        props.history.push("/dashboard");
      }}
    >
      <h2 className="text-6xl font-extrabold text-center">Create A New Potluck</h2>
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
        name="event_name"
        type="text"
        required
        value={event.event_name}
        onChange={event => eventInputHandler(event)}
        placeholder="Event Name"
        aria-label="event name"
      />
      <h3>Date and Time:</h3>
        <div className='flex space-x-6'>
          <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block .w-3/4 appearance-none leading-normal"
            name="date"
            type="date"
            required
            min={today}
            value={event.date}
            onChange={event => eventInputHandler(event)}
            aria-label='event date'
          />
          <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block .w-3/4 appearance-none leading-normal"
            name="time"
            type="time"
            required
            value={event.time}
            onChange={event => eventInputHandler(event)}
            aria-label='event time'
          />
        </div>
      <h3>Location:</h3>
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
        name="address"
        type="text"
        required
        value={event.address}
        onChange={event => eventInputHandler(event)}
        placeholder="Street Address"
        aria-label = 'event address'
      />
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
        name="city"
        type="text"
        required
        value={event.city}
        onChange={event => eventInputHandler(event)}
        placeholder="City"
        aria-label='event city'
      />
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
        name="state"
        type="text"
        required
        value={event.state}
        onChange={event => eventInputHandler(event)}
        placeholder="State"
        aria-label='event state'
      />
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-10 my-3 block w-4/5 appearance-none leading-normal"
        name="description"
        type="text"
        required
        value={event.description}
        onChange={event => eventInputHandler(event)}
        placeholder="Description"
        aria-label = 'event description'
      />
      <button className="hover:bg-apricot text-xl bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg px-4 py-4 my-3 block w-4/5 appearance-none leading-normal"
      type="submit" aria-label='create event'>Submit</button>
    </form>
  );
};

export default AddPotluckForm;
