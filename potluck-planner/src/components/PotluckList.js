import * as React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import PotluckCard from "./PotluckCard";
import data from "../data";

const potlucks = data;

function PotluckList () {
  const { url, path } = useRouteMatch();

  return (
    <div>
        <div className="bg-gray-500 mt-4 w-auto">
            <h1 className="flex font-bold justify-center">Potlucks</h1>
        </div>
        <div className="flex items-stretch">
            <div>
                <ul>
                    {potlucks.map(({ name, id }) => (
                        <li key={id}>
                            <Link to={`${url}/${id}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
            <div className="ml-16 pl-16">
                <Route path={`${path}/:potluckId`}>
                    <PotluckCard />
                </Route>
            </div>
        </div>
    </div>
  );
}

export default PotluckList;
