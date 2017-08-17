/**
 * 插入排序
 * 输入：n个数的一个序列（A1，A2,...,An）
 * 输出：输入序列的一个排列(A1',A2',...,An'),满足A1'<=A2'<=...<=An'
 */
function insertion_sort() {
    //待排序列
    let sortArr = [5, 2, 4, 6, 1, 3];
    console.log("排序前:");
    console.log(sortArr);
    for (let i = 1; i < sortArr.length; i++) {
        let key = sortArr[i];
        let index = i - 1;
        while (index >= 0 && sortArr[index] > key) {
            sortArr[index + 1] = sortArr[index];
            index--;
        }
        sortArr[index + 1] = key;
    }
    console.log("排序后:");
    console.log(sortArr);
}