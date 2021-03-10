import React from 'react';
import Card from '../Card/Card';
import './Shelf.css'

function Shelf() {
  return (
    <section className="shelf">
    <h1 className="shelf__title">Shelf </h1> 
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default Shelf;
