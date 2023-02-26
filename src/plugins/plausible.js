import Plausible from 'plausible-tracker';

export default {
  install: (app, options) => {
    const { enableAutoPageviews } = Plausible(options);

    enableAutoPageviews();

    app.provide('plausible');
  },
};
