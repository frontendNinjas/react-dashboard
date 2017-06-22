import pagesData from '../api/pagesData'
import _clone from 'lodash/clone'
import _find from 'lodash/find'
import _remove from 'lodash/remove'
import _indexOf from 'lodash/indexOf'
import delay from '../api/delay'

var pagesApi = {

    getAllpages() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(_clone(pagesData));
            },delay);
        });
    }

}

export default pagesApi;