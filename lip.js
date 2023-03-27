const myLip = {
    //ARRAY Methods
    first: function(arr) {
        return arr[0]
    },
    chunk: function(arr, num = 1) {
        let arr3 = []
        let arr2 = []
        for (let i = 0; i < arr.length; i++) {
            // debugger
            if (num > arr2.length) {
                arr2.push(arr[i])

            }
            if (num === arr2.length) {
                arr3.push(arr2)
                arr2 = []
            }
        }
        // arr.forEach((element, index, arr) => {
        //     console.log(arr.length);
        //     arr2 = [element]
        //     arr3.push(arr2)
        // });
        return arr3
    },
    compact: function(arr) {
        let arr2 = []
        arr.forEach((element, index) => {
            if (element) {
                arr2[arr2.length] = element
            }
        });
        return arr2
    },
    drop: function(arr, num = 0) {
        if (num != 0) num++
            return arr.slice(num)
    },
    dropRight: function(arr, num = 0) {
        if (num == 0) {
            return arr.slice(-1)
        } else {
            return arr.slice(num, arr.length)
        }

    },
    dropWhile: function(arr, func) {
        let arr2 = []
        arr.forEach(element => {
            if (!func(element)) {
                arr2.push(element)
            }
        })
        return arr2
    },
    join: function(arr, separator = "") {
        let arr2 = []
        if (separator == "") {
            return arr.toString()
        } else {
            let arr3 = arr.reduce((accumulator, element, index) => {
                return accumulator + element + separator
            }, "")
            return arr3.slice(0, -1)
        }

    },
    difference: function(arr, arr2) {
        let result = []
            // let isbool = false
            // let isbool2 = false

        // for (let i = 0; i < arr.length; i++) {
        //     isbool = false
        //     for (let j = 0; j < arr2.length; j++) {
        //         if (arr[i] == arr2[j]) {
        //             isbool = true
        //         }
        //         if (j == arr2.length - 1 && isbool == false) {
        //             result.push(arr[i])
        //         }
        //     }

        // }

        // for (let j = 0; j < arr2.length; j++) {
        //     isbool = false
        //     for (let i = 0; i < arr.length; i++) {
        //         if (arr2[j] == arr[i]) {
        //             isbool = true
        //         }
        //         if (i == arr.length - 1 && isbool == false) {
        //             result.push(arr2[j])
        //         }
        //     }

        // }

        // for (let i = 0; i < arr.length; i++) {
        //     isbool = false

        //     for (let j = 0; j < arr2.length; j++) {
        //         if (arr[i] == arr2[j]) {
        //             isbool = true
        //             isbool2 = true
        //         }
        //         if (j == arr2.length - 1 && isbool == false) {
        //             if (i == arr.length - 1 && isbool2 == false) {
        //                 result.push(arr2[j])
        //             }
        //             result.push(arr[i])
        //         }
        //         isbool2 = false
        //     }

        // }
        // debugger
        for (let i = 0; i < arr.length; i++) {
            let boolean = false
                // !arr.includes(i)
            for (let j = 0; j < arr2.length; j++) {
                if (arr[i] == arr2[j]) {
                    boolean = true
                    break
                }
            }
            if (!boolean) {
                result[result.length] = arr[i]

            }

        }

        // for (let j = 0; j < arr2.length; j++) {
        //     !arr2.includes(j)
        //     for (let i = 0; i < arr.length; i++) {
        //         if (arr2[j] == arr[i]) {
        //             arr2.includes(j)
        //         }
        //         if (i == arr.length - 1 && !arr2.includes(j)) {
        //             result.push(arr2[j])
        //         }
        //     }

        // }
        return result
    },
    initial: function(arr) {
        let arr2 = []
        let exception = arr.pop()
        arr.forEach(element => {
            if (element != exception) {
                arr2.push(element)
            }
        })
        return arr2
    },
    uniq: function(arr) {
        let arr2 = []
        arr.forEach(element => {
            if (!arr2.includes(element)) {
                arr2.push(element)
            }
        })
        return arr2
    },
    reverse: function(arr) {
        let arr2 = []
        for (let i = arr.length - 1; i >= 0; i--) {
            arr2[arr2.length] = arr[i]
        }
        return arr2
    },
    findIndex: function(arr, callback, startIndex = 0) {
        for (let i = startIndex; i < arr.length; i++) {
            if (callback(arr[i]) == true)
                return i;
        }
    },
    flatten: function(arr) {
        let arr2 = []
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "number") {
                arr2[arr2.length] = arr[i]
            } else {
                for (let j = 0; j < arr.length; j++) {
                    arr2[arr2.length] = arr[i][j]
                }
            }
        }
        return arr2
    },
    flattenDeep: function(arr, arr2 = []) {
        // console.log(this.flattenDeep());
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "number") {
                arr2[arr2.length] = arr[i]
            } else {
                this.flattenDeep(arr[i], arr2)
            }
        }
        return arr2
    },
    last: function(arr) {
        return arr[arr.length - 1]
    },
    pull: function(arr, ...value) {
        let arr2 = []
            // debugger
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] != value) {
                arr2[arr2.length] = arr[i]
            } else { this.pull(arr2) }
        }


        // debugger
        //     for (let i = 0; i < arr.length; i++) {
        //         for (let index = 0; index < value.length; index++) {
        //             if (arr[i] != value) {
        //                 arr2[arr2.length] = arr[i]
        //             }
        //         }
        //     }
        //     return arr2
        // }



        //     for (let i = 0; i < arr.length; i++) {
        //         for (let index = 0; index < value.length; index++) {
        //             if (arr[i] != value[index] & arr[i] != value[index - 1] & arr[i] != value[index + 1]) {
        //                 arr2.forEach(element => {
        //                     if (arr[i] != arr2[element]) {
        //                         arr2[arr2.length] = arr[i]
        //                     }

        //                 });

        //             }
        //         }
        //     }
        //     return arr2
        // }

    },
    remove: function(arr, func) {
        let arr2 = []
            // debugger
        for (let i = 0; i < arr.length; i++) {
            if (!func(arr[i])) {
                // arr2[arr2.length] = arr[i]
                delete arr[i]

            }
        }

        return this.compact(arr)
    },
    indexOf: function(arr, num, startIndex = 0) {
        for (let i = startIndex; i < arr.length; i++) {
            if (arr[i] == num) {
                return i
            }

        }
    },
    fromPairs: function(arr, myObj = new Object()) {
        for (let i = 0; i < arr.length; i++) {
            myObj[arr[i][0]] = arr[i][1]

        }
        return myObj
    },
    mutate: function(arr) {
        let obj = new Object()
        for (let index = 0; index < arr.length; index++) {


        }
    },
    zip: function(...arr) {
        let arr2 = []
        let arr3 = []
        let length = 0
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].length > length) {
                length = arr[index].length
            }
        }
        // for (let index = 0; index < length; index++) {
        //     for (let i = 0; i < arr.length; i++) {
        //         for (let j = 0; j < arr[i].length; j++) {
        //             if (j == arr3.length) {
        //                 arr2[arr2.length] = arr[i][j]
        //             }
        //         }
        //         if (arr.length == arr2.length) {
        //             arr3[arr3.length] = arr2
        //             arr2 = []
        //         }

        //     }
        // }

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (j == arr3.length) {
                    arr2[arr2.length] = arr[i][j]
                }
            }
            if (arr.length == arr2.length) {
                arr3[arr3.length] = arr2
                arr2 = []
                i = -1
            }
            if (arr3.length == length) {
                break
            }

        }

        console.log(arr3);

        return arr3
    },
    unzip: function(arr) {
        let arr3 = []
        let arr2 = []
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (j == count) {
                    arr2[arr2.length] = arr[i][j]
                    if (arr2.length == 2) {
                        arr3[arr3.length] = arr2
                        arr2 = []
                        count++
                        i = 0
                    }
                }
                if (count == arr[0].length) {
                    break
                }
            }
        }

        return arr3
    },
    // MATH Methods
    add: function(firstSumm, secondSumm) {
        return firstSumm + secondSumm
    },
    ceil: function(num, precision = 0) {
        if (precision == 0) {
            return num.toFixed()
        } else {
            // Number()
            // return ((Math.floor((num - 1) / precision) + 1) * precision)
            return +num.toFixed(precision)
        }

    },
    divide: function(firstDivis, secondDivis) {
        return firstDivis / secondDivis
    },
    floor: function(num, precision = 0) {
        return Math.floor(num, precision)
            // return num.toFixed()
    },
    max: function(arr) {
        let max = arr[0];
        arr.forEach(function(element) {
            if (element > max) max = element;
        });
        return max;
    },
    mean: function(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) { sum = sum + arr[i]; }
        return sum / arr.length;
    },
    min: function(arr) {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min
    },
    multiply: function(num1, num2) { return num1 * num2 },
    round: function(num, precision = 0) {
        return this.ceil(num, precision)
    },
    subtract: function(num1, num2) { return num1 - num2 },
    sum: function(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) { sum += arr[i] }
        return sum
    },
    //ARRAY
    every: function(arr, predicate) {
        let element
        let arr2
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (this.predicateCheck(predicate)) {
                let element = Boolean(arr[i])
                if (element !== true) { return false }
            }
            arr2 = Array(arr[i])
            for (let j = 0; j < arr2.length; j++) {
                let keys1 = Object.keys(arr2[j])
                let keys2 = Object.keys(predicate)
                for (let index = 0; index < keys2.length; index++) {
                    for (let z = 0; z < keys1.length; z++) {
                        if (keys2[index] == keys1[z]) {
                            count++
                            break
                        }
                    }
                }
                if (count !== keys2.length) {
                    return false
                }
                return true

            }
        }

        return true
    },
    predicateCheck: function(value) {
        if (value == Boolean) {
            return true
        }
    },
    conversion: function(boolean) {
        debugger
        if (Boolean(boolean) == "boolean") {
            return Boolean(boolean)
        } else { return "e" }

    },
    assign: function(obj, ...source) {
        for (const key in source) {
            if (Object.hasOwnProperty.call(source, key)) {
                this.assignValue(obj, key, source[key])
            }
        }
        return obj
    },
    assignValue: function(obj, key2, value) {
        for (const key in value) {
            if (Object.hasOwnProperty.call(value, key)) {
                obj[key] = value[key]
            }
        }
    },
    findKey: function(obj, func) {
        // for (const key in obj) {
        //     if (Object.hasOwnProperty.call(obj, key)) {
        //         const element = obj[key];
        //         console.log(element);
        //         for (let i = 0; i < obj.length; i++) {
        //             if (func == element[key]) {
        //                 console.log(element[key]);
        //             }

        //         }

        //     }
        // }
        for (const key in obj) {
            if (func(obj[key])) {
                return key
            }

        }

    },
    concat: function(arr, arr2) {
        let result = [...arr]
        debugger
        for (let i = 0; i < arr2.length; i++) {
            let boolean = true
            for (let j = 0; j < result.length; j++) {
                if (arr2[i] == result[j]) {
                    break
                }
                if (result.length - 1 == j) {
                    boolean = false
                        // break
                }
            }
            if (!boolean) {
                result[result.length] = arr2[i]
            }
        }
        return result
    },
    union: function(...arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            result = this.unionDubb(arr[i], result)
        }


        return result
    },
    unionDubb: function(arr, arr2) {
        let result = arr.concat(arr2)
            // result[result.length] = arr
            // result[result.length] = arr2

        // for (let i = 0; i < arr.length; i++) {
        //     let boolean = false
        //     for (let j = 0; j < arr2.length; j++) {
        //         if (arr[i] == arr2[j]) {
        //             boolean = true
        //             break
        //         }
        //         // if (!boolean) {
        //         //     arr3[arr3.length] = arr2[j]
        //         // }
        //         // if (!boolean) {
        //         //     arr3[arr3.length] = arr2[j]
        //         // }
        //     }
        // }
        return this.uniq(result)
    },
    fill: function(arr, value, start = 0, end = arr.length) {
        if (end > arr.length) {
            let e = new Error('Error');
            return e
        }
        for (let i = start; i < end; i++) {
            arr[i] = value
        }
        return arr
    },
    head: function(arr) {
        return arr[0]
    },
    without: function(arr, ...value) {
        let arr2 = []
        for (let i = 0; i < arr.length; i++) {
            let boolean = true
            for (let j = 0; j < value.length; j++) {
                if (arr[i] == value[j]) {
                    boolean = false
                    break
                }
            }
            if (boolean) {
                arr2[arr2.length] = arr[i]
            }
        }
        return arr2
    },
    xor: function(...arr) {
        let result = []
        result = this.xor2(...arr)
        return result
    },
    xor2: function(arr, arr2) {
        let result = []
        let filterArr = arr.concat(arr2)
        for (let i = 0; i < filterArr.length; i++) {
            let boolean = true
            for (let j = 0; j < filterArr.length; j++) {
                if (filterArr[i] == filterArr[j] && i !== j) {
                    boolean = false
                    break
                }
            }
            if (boolean) {
                result[result.length] = filterArr[i]
            }

        }
        // for (let i = 0; i < arr.length; i++) {
        //     let boolean = true
        //     for (let j = 0; j < arr2.length; j++) {
        //         if (arr[i] == arr2[j]) {
        //             boolean = false
        //             break
        //         }
        //         if (boolean) {
        //             result[result.length] = arr[i]
        //         }

        //     }

        // }
        return result
    },
    tail: function(arr) {
        let arr2 = []
        for (let i = 0; i < arr.length; i++) {
            if (i !== 0) { arr2[arr2.length] = arr[i] }
        }
        return arr2
    },
    sortedIndex: function(arr, value) {
        arr[arr.length] = value
        arr.sort()
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return i
            }
        }
    },
    take: function(arr, n = 1) {
        let arr2 = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= n) {
                arr2[arr2.length] = arr[i]
            }
        }
        return arr2
    },
    functions: function(obj) {
        let result = []
        for (let i = 0; i < obj.length; i++) {
            if (Object.hasOwnProperty.call(obj, i)) {
                result[result.length] = obj[i]
            }
        }
        // for (const key in obj) {
        //     if (Object.hasOwnProperty.call(obj, key)) {
        //         result[result.length] = obj[key]
        //     }
        // }
        return result
    },
    forIn: function(obj, func) {
        let keysArray = []
        keysArray = Object.keys(obj)
        for (let i = 0; i < keysArray.length; i++) {
            func(keysArray[i])
        }
        return obj
    },
    get: function(obj, path) {
        let newArray = []
        let elementNewArray = ""
            // console.log(obj["a"][0]["b"]["c"]);
        if (typeof path == "string") {
            for (let i = 0; i < path.length; i++) {
                if (path[i] == ".") {
                    if (path[i - 1] !== ']') {
                        newArray[newArray.length] = elementNewArray
                        elementNewArray = ''
                    }
                } else if (path[i] == "[" || path[i] == "]") {
                    newArray[newArray.length] = elementNewArray
                    elementNewArray = ''
                } else {
                    elementNewArray += path[i]
                        // console.log(elementNewArray);
                }
            }
            newArray[newArray.length] = elementNewArray
                // console.log(obj[newArray[0]][newArray[1]][newArray[2]][newArray[3]]);
            for (let i = 0; i < newArray.length; i++) {
                obj = obj[newArray[i]]
            }
        }
        return obj
    },
    has: function(obj, path) {
        let newPath = []
        if (typeof path == 'string') {
            newPath = this.stringTransform(path)
            console.log(newPath);
        }
        if (typeof path == 'object') {
            newPath = path
        }
        for (let i = 0; i < newPath.length; i++) {
            if (obj[newPath[i]]) {
                obj = obj[newPath[i]]
            } else {
                return false
            }
        }
        return true
    },
    stringTransform: function(path) {
        let transformPath = []
        let elementTransformPath = ''
        for (let i = 0; i < path.length; i++) {
            if (path[i] == ".") {
                if (path[i - 1] !== ']') {
                    transformPath[transformPath.length] = elementTransformPath
                    elementTransformPath = ''
                }
            } else if (path[i] == "[" || path[i] == "]") {
                transformPath[transformPath.length] = elementTransformPath
                elementTransformPath = ''
            } else {
                elementTransformPath += path[i]
                console.log(elementTransformPath);
            }
        }
        transformPath[transformPath.length] = elementTransformPath

        return transformPath
    },
    invert: function(obj) {
        let newObj = {}
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                console.log(obj[key]);
                console.log(key);
                newObj[obj[key]] = key
            }
        }
        return newObj
    },
    invoke: function(obj, path, ...args) {
        let newArray = []
        let elementNewArray = ""
        let meth
        if (typeof path == "string") {
            for (let i = 0; i < path.length; i++) {
                if (path[i] == ".") {
                    if (path[i - 1] !== ']') {
                        newArray[newArray.length] = elementNewArray
                        elementNewArray = ''
                    }
                } else if (path[i] == "[" || path[i] == "]") {
                    newArray[newArray.length] = elementNewArray
                    elementNewArray = ''
                } else {
                    elementNewArray += path[i]
                    console.log(elementNewArray);
                }
            }
            newArray[newArray.length] = elementNewArray
            for (let i = 0; i < newArray.length - 1; i++) {
                obj = obj[newArray[i]]
            }
            meth = newArray[newArray.length - 1]
                //for (let i = 0; i < args.length; i++) {
                // while (i !== args.length-1) {
                //add
                // }

            //}
            //console.log(obj[meth](args[0], args[1]));


        }
        return obj[meth](...args)
    },
    keys: function(object) {
        let arrKeys = []
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                arrKeys[arrKeys.length] = key
            }
        }
        return arrKeys
    },
    mapValues: function(object, func) {
        let result = {}
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                if (func(object[key])) {
                    result[key] = func(object[key])
                }
            }
        }
        return result
    },
    omit: function(object, paths = 0) {
        let result = {}
        for (const key in object) {
            let boolean = true
            if (Object.hasOwnProperty.call(object, key)) {
                for (let i = 0; i < paths.length; i++) {
                    if (key == paths[i]) {
                        boolean = false
                        break
                    }
                }
                if (boolean) {
                    result[key] = object[key]
                }
            }
        }
        return result
    },
    pick: function(object, paths = 0) {
        let result = {}
        for (const key in object) {
            let boolean = true
            if (Object.hasOwnProperty.call(object, key)) {
                for (let i = 0; i < paths.length; i++) {
                    if (key == paths[i]) {
                        boolean = false
                        break
                    }
                }
                if (!boolean) {
                    result[key] = object[key]

                }
            }
        }
        return result
    },
    at: function(obj, path) {
        let resultValue = Object.assign(obj)
        let resultArray = []
        let newArray = []
        let elementNewArray = ""
        let elementPath = ""
        for (let j = 0; j < path.length; j++) {
            elementPath = path[j]
            if (typeof elementPath == "string") {
                for (let i = 0; i < elementPath.length; i++) {
                    if (elementPath[i] == ".") {
                        if (elementPath[i - 1] !== ']') {
                            newArray[newArray.length] = elementNewArray
                            elementNewArray = ''
                        }
                    } else if (elementPath[i] == "[" || elementPath[i] == "]") {
                        newArray[newArray.length] = elementNewArray
                        elementNewArray = ''
                    } else {
                        elementNewArray += elementPath[i]
                            // console.log(elementNewArray);
                    }
                }
                if (elementNewArray) {
                    newArray[newArray.length] = elementNewArray
                }
                for (let r = 0; r < newArray.length; r++) {
                    debugger

                    resultValue = resultValue[newArray[r]]
                        // console.log(obj[newArray[r]]);
                }
            }
            resultArray[resultArray.length] = resultValue
            elementNewArray = ""
            newArray = []
            resultValue = Object.assign(obj)
        }
        //resultValue = obj 
        return resultArray
    },
    merge2: function(object, sources) {

        for (const key in sources) {
            if (Object.hasOwnProperty.call(sources, key)) {
                for (let i = 0; i < sources[key].length; i++) {
                    for (const key2 in sources[key][i]) {
                        if (Object.hasOwnProperty.call(sources[key][i], key2)) {
                            if (typeof sources[key][i][key2] !== "undefined") {
                                object[key][i][key2] = sources[key][i][key2]


                            }
                        }
                    }

                }
            }
        }

        return object
    },
    merge: function(object, sources) {
        let objects = [object, sources]
        let boolean
        console.log(objects);
        for (let i = 0; i < objects.length; i++) {
            boolean = this.func(objects[i])
            if (boolean) {
                object = this.func2(object, sources)
            }
        }

        return object
    },
    func: function(obj) {
        if (!Array.isArray(obj)) {
            return obj
        }
    },
    func2: function(obj, obj2) {
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                for (let i = 0; i < obj[key].length; i++) {
                    for (const key2 in obj[key]) {
                        if (Object.hasOwnProperty.call(obj[key][i], key2)) {
                            if (typeof obj2[key][i][key2] !== "undefined") {
                                obj[key][i][key2] = obj2[key][i][key2]


                            }

                        }
                    }

                }

            }
        }
        return obj
    },
    toPairs: function(object) {
        let result = []
        let resultValue = []
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                resultValue[resultValue.length] = key
                resultValue[resultValue.length] = object[key]
            }
            if (resultValue.length == 2) {
                result[result.length] = resultValue
                resultValue = []
            }
        }
        return result
    },
    set: function(obj, path, value) {
        let obj2 = Object.assign(obj)
        if (typeof path == "string") {
            this.newPath(path)

            // console.log(newArray)
            for (let i = 0; i < newArray.length; i++) {
                obj2 = obj2[newArray[i]]
            }
            // console.log(obj2);
            console.log(newArray[newArray.length - 1]);

            for (const key in obj) {
                console.log(key);
                console.log(obj[key]);
                if (key == newArray[newArray.length - 1]) {
                    obj[key] = value
                    console.log("QQQQ");
                }

            }

            // obj2 = value
            // console.log(obj);

            // console.log(obj["a"]['0']['b']['c'])
            // for (let i = 0; i < newArray.length; i++) {
            //     for (const key in obj) {
            //         if (Object.hasOwnProperty.call(obj, key)) {
            //             if (i == newArray.length) {
            //                 obj[key][i] = value

            //             }

            //         }
            //     }
            //     // obj = obj[newArray[i]]
            // }
        }
        return obj
    },
    set2: function(obj, path, value) {
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                this.set2(obj[key], )

            }
        }
    },
    newPath: function(path) {
        let newArray = []
        let elementNewArray = ""
        for (let i = 0; i < path.length; i++) {
            if (path[i] == ".") {
                if (path[i - 1] !== ']') {
                    newArray[newArray.length] = elementNewArray
                    elementNewArray = ''
                }
            } else if (path[i] == "[" || path[i] == "]") {
                newArray[newArray.length] = elementNewArray
                elementNewArray = ''
            } else {
                elementNewArray += path[i]
            }
        }
        newArray[newArray.length] = elementNewArray
        return newArray
    }

}


export default myLip
// var users = [
//     { 'user': 'barney', 'age': 36, 'active': false },
//     { 'user': 'fred', 'age': 40, 'active': false }
// ];// console.log(_.every(users, { 'user': 'barney', 'active': false }));
// ];// console.log(_.every(users, { 'user': 'barney', 'active': false }));