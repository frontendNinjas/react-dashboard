import themesData from '../api/themesData';
import _clone from 'lodash/clone'
import _find from 'lodash/find'
import _remove from 'lodash/remove'
import _indexOf from 'lodash/indexOf'
import delay from '../api/delay'
var themesApi = {

    getAllthemes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(_clone(themesData));
            }, delay);
        });
    },

    updateThemesSuccess(themes) {
        console.log("updateThemesSuccess api")
    }

}

export default themesApi;