/// <reference types="svelte" />

import { Meteor } from 'meteor/meteor';
import { mount } from 'svelte';
import App from '../imports/ui/App.svelte';

Meteor.startup(() => {
    mount(App, { target: document.getElementById('app')! })
});