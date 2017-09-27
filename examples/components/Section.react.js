import React from 'react';

import CodeSample from './CodeSample.react';

export default props => (
  <section className="section">
    <h2>{props.title}</h2>
    <div className="frame">
      {props.children}
      {props.code ? <CodeSample>{props.code}</CodeSample> : null}
    </div>
  </section>
);
