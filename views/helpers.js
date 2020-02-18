const dateFormat = require('dateformat');

module.exports = {
    date: function (value, object) {
        if (!value) {
        	return null;
        }
        return dateFormat(value, 'yyyy-mm-dd');
    }
};
