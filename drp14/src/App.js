import React, { Component } from "react";
import { SportingEvent } from "./SportingEvent";
import { HostEventForm } from "./HostEventForm";
import "./App.css";

class App extends Component {
  state = {
    body: null,
  };

  // fetching the GET route from the Express server which matches the GET route from server.js
  getEvents = async () => {
    const response = await fetch("/get_events");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    console.log(body);
    this.setState({ body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.body ? (
            <div>
              {this.state.body.events.map(x => (
                <SportingEvent data={x} />
              ))}
            </div>
          ) : (
            <button onClick={this.getEvents} type="button">
              Find Event
            </button>
          )}
          <HostEventForm />
        </header>
      </div>
    );
  }
}

export default App;
