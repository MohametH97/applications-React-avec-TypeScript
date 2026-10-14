import React from "react";

// Étape 2 : décrire la forme des props dans une interface.
interface GreetingProps {
  name: string; // obligatoire
}

// Étapes 3 et 4 : typer les props et la valeur de retour.
const Greeting = ({ name }: GreetingProps): React.JSX.Element => {
  return <div>Bonjour, {name} !</div>;
};

export default Greeting;
