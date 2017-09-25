import React from 'react';

export default props => (
  <section className="section">
    <h2>{props.title}</h2>
    <div className="frame">
      {props.children}
    </div>
  </section>
);
