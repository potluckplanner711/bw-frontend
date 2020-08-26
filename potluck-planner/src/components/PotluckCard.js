import React from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import PotluckDetail from "./PotluckDetail";
import GuestList from "./GuestList"
import ItemList from "./ItemList"
import data from "../data";

const potlucks = data;

export default function PotluckCard() {
  const { potluckId } = useParams();
  const { url, path } = useRouteMatch();

  const potluck= potlucks.find(({ id }) => {
    return id === potluckId;
  });
  return (
    <div className="w-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <h2 className="text-3xl font-bold">{potluck.name}</h2>
      </div>
      <div>
        <div className="flex align-center justify-center">
          <p>{potluck.date}</p>
          <p>{potluck.address}</p>
          <p>{potluck.city}, {potluck.state} {potluck.zip}</p>
        </div>
        <hr />
        <div className="flex justify-evenly items-stretch w-auto">
          <div className="w-auto">
            <GuestList />
          </div>
          <div className="w-auto">
            <ItemList />
          </div>
          <Route path={`${path}/:subId`}>
            <PotluckDetail />
          </Route>
        </div>
      </div>
    </div>
  );
}
