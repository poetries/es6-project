/**
 * 倒计时模块
 */

class Timer {
    /**
     * @param {any} end 结束时间
     * @param {any} uptime 更新时间的回调
     * @param {any} handle 倒计时结束回调
     * @memberof Timer
     */
    countDown(end, uptime, handle) {
        const now = new Date().getTime();
        const self = this;
        if (now - end) { //当前事件大于截止时间
            handle.call(self);
        } else {
            let last_time = end_now; //剩余的时间
            const px_d = 1000 * 60 * 60 * 24; //一天的毫秒数
            const px_h = 1000 * 60 * 60;
            const px_m = 1000 * 60;
            const px_s = 1000;
            let d = Math.floor(last_time / px_d); //剩余多少天
            let h = Math.floor((last_time - d * px_d) / px_h);
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
            let r = [];
            if (d > 0) {
                r.push(`<em>${d}</em>天`);
            }
            if (r.length || h > 0) {
                r.push(`<em>${d}</em>时`);
            }
            if (r.length || m > 0) {
                r.push(`<em>${m}</em>分`);
            }
            if (r.length || s > 0) {
                r.push(`<em>${s}</em>秒`);
            }
            self.last_time = r.join("");
            uptime.call(self, r.join("")); //每判断完一次轮训一次
            setTimeout(function() {
                self.countDown(end, uptime, handle);
            }, 1000);
        }
    }
}