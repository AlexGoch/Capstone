import html from "html-literal";
() =>
  html`
    HTML template literal
  `;

import * as views from "./views";

export default state => html`
  ${views[state.view](state)}
`;
