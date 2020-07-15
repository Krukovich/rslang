import React, { Suspense } from "react";
import RouteMap from "./Components/Router/Routes";
import { AppWrapper } from "./Components/AppWrapper/AppWrapper";


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
