import React from "react";

export const bootstrapContainer = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="registeration-form">
              <div className="CreateAccount">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
