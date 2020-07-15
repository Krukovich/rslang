import React, { Suspense } from "react";
import RouteMap from "./Components/Router/Routes";
import { AppWrapper } from "./Components/AppWrapper/AppWrapper";
import Spinner from "./Components/Spinner/Spinner";


const App = () => {
  return (

    <Suspense fallback={<Spinner />}>
      <AppWrapper>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <RouteMap />
            </div>
          </div>
        </div>
      </AppWrapper>
    </Suspense>
  );
};

export default App;
