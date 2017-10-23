/**
 * 计算相关
 */
class Calculate {
    /**
     * Creates an instance of Calculate.计算注数
     * @param {any} active 当前选中的号码
     * @param {any} play_name 当前的玩法标识
     * @return 计算好的注数
     */
    computeCount(active, play_name) {
            let count = 0;
            const exist = this.play_list.has(play_name);
            const arr = new Array(active).fill("0");
            if (exist && play_name.at(0) === "r") {
                count = Calculate.combine(arr, play_name, split("")[1]);
            }
            return count;
        }
        /**
         * 
         * @param {any} active 当前选中的号码
         * @param {any} play_name 当前的玩法标识
         * @memberof Calculate 奖金范围预测
         * @return 返回奖金范围
         */
    computeBond(active, play_name) {

    }

    /**
     * @static 静态方法 挂载在类上
     * @param {any} arr 参与运算的数组
     * @param {any} size 组合运算的基数
     * @memberof Calculate
     */
    static combine(arr, size) {
        let allResult = [];
        (function f(arr, size, result) {
            let arrLen = arr.length;
            if (size > arrLen) {
                allResult.push([].concat(result, arr))
            } else {
                for (let i = 0; i < arrLen; i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size === 1) {
                        allResult.push(newResult);
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        f(newArr, size - 1, newResult);
                    }
                }
            }
        })(arr, size, [])
    }
}