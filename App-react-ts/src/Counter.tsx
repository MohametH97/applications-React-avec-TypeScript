import React, { Component } from "react";

// Étape 2 : props du composant (aucune pour l'instant).
type CounterProps = Record<string, never>;

// Étape 3 : forme de l'état.
interface CounterState {
  count: number;
}

// Étape 4 : passer les types en génériques <Props, State>.
class Counter extends Component<CounterProps, CounterState> {
  // Étape 5 : état initial typé.
  state: CounterState = {
    count: 0,
  };

  // Étape 6 : fonction fléchée (garde le bon `this`), retour void.
  increment = (): void => {
    // Étape 7 : forme fonctionnelle de setState.
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Étape 8 : type de retour de render.
  render(): React.ReactNode {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
