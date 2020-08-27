import React from "react";
import { changeAttendance, removeGuest } from "../../actions/specificEventActions";
import { deleteEvent, getEvents } from "../../actions/generalEventsActions";
import { Popup } from "semantic-ui-react";


export const HostButtons = ({ event, dispatch }) => {
  const { event_id } = event;

  return (
    <button
      onClick={e => {
        e.preventDefault();
        deleteEvent(dispatch, event_id);
      }}
      alt="Delete"
    >
    </button>
  );
};

export const GuestButtons = ({ event, dispatch, user_id }) => {
  return (
    <div>
      {event.attending ? (
        <ConfirmedGuestButtons
          event_id={event.event_id}
          user_id={user_id}
          dispatch={dispatch}
        />
      ) : (
        <UnconfirmedGuestButtons
          event_id={event.event_id}
          user_id={user_id}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export const ConfirmedGuestButtons = ({ event_id, user_id, dispatch }) => {
  return (
    <button
      onClick={() =>
        removeGuest(dispatch, event_id, {
          data: { user_id: user_id }
        }).then(res => getEvents(dispatch, user_id))
      }
      alt="Leave"
    >
      Leave Event
    </button>
  );
};

export const UnconfirmedGuestButtons = ({ event_id, user_id, dispatch }) => {
  return (
    <div>
      <button
        onClick={() => {
          changeAttendance(dispatch, event_id, user_id, {
            attending: true
          }).then(res => getEvents(dispatch, user_id));
        }}
        alt="Accept"
      >
      </button>

      <button
        onClick={() => {
          removeGuest(dispatch, event_id, {
            data: { user_id: user_id }
          }).then(res => getEvents(dispatch, user_id));
        }}
        alt="Decline"
      >
      </button>
    </div>
  );
};
