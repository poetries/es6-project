import $ from "jquery";

class Interface {
    /**
     * 
     * getOmit:获取遗漏数据
     * @param {any} issue  当前期号
     * @memberof Interface
     */
    getOmit(issue) {
            let self = this;
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: '/get/omit',
                    data: {
                        issue: issue
                    },
                    dataType: 'json',
                    success: function(res) {
                        self.setOmit(res.data);
                        resolve.call(self, res);
                    },
                    error: function(err) {
                        reject.call(err);
                    }
                })
            })
        }
        /**
         * 
         * getOpenCode: 获取开奖号
         * @param {any} issue  期号
         * @memberof Interface
         */
    getOpenCode(issue) {
            let self = this;
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: '/get/openCode',
                    dataType: 'json',
                    data: {
                        issue: issue
                    },
                    success: function(res) {
                        self.setOpenCode(res.data);
                        resolve.call(self, res)
                    },
                    error: function(err) {
                        reject.call(err);
                    }
                })
            })
        }
        /**
         * 
         * getState:获取状态
         * @param {any} issue 期号
         * @memberof Interface
         */
    getState(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                dataType: 'json',
                data: {
                    issue: issue
                },
                success: function(res) {
                    resolve.call(self, res)
                },
                error: function(err) {
                    reject.call(err);
                }
            })
        })
    }
}

export default Interface;