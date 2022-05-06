import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

export default function createWidget(widgetParams) {
    
    // widget tag name
    const WC_TAG_NAME = 'my-sample-widget';

    const WelcomeSnippet = () => {
        return <App widgetParams={widgetParams} />
    }
   
    ReactDOM.render(<WelcomeSnippet />, document.getElementById('sample-widget-app'))

    if (!customElements.get(WC_TAG_NAME)) {
        customElements.define(WC_TAG_NAME, App);
    }

    const componentInstance = document.createElement(WC_TAG_NAME, {
        is: WC_TAG_NAME,
    });


    // //mount component instance in the body if we consider usage of shadowDOM  for the sake of isolation, styles are not leaking etc.
    // // const container = document.body;
    // // container.appendChild(componentInstance);


    return componentInstance;

}
