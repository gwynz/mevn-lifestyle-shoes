import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#00CCA7',
                secondary: '#e2e8f0',
                accent: '#8c9eff',
                error: '#f56565',
            },
        },
    },
})