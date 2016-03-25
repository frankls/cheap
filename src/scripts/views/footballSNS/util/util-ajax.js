var utilAjax = {
    query: function(paramObj) {
        QApp.ajax({
            url: paramObj.url,
            method: paramObj.method || 'get',
            data: paramObj.data || {}
        }).done(function(rs) {
            if (rs && rs.ret) {
                paramObj.success && paramObj.success(rs);
            } else {
                paramObj.error && paramObj.error(rs);
            }
        }).fail(function(rs) {
            //todo
        });
    },
}

module.exports = utilAjax;