var utilAjax = {
    query: function(paramObj) {
        QApp.ajax({
            url: paramObj.url,
            method: paramObj.method || 'get',
            data: paramObj.data || {}
        }).done(function(rs) {
            if (rs) {
                paramObj.success && paramObj.success(rs);
            } else {
                paramObj.error && paramObj.error(rs);
            }
        }).fail(function(rs) {
            //todo
            alert("我是papi酱");
        });
    },
}

module.exports = utilAjax;