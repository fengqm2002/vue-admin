## watch 5种用法
1. 简单监视 ref 数据
```   
const refCount = ref(0)
watch(() => console.log(refCount.value));
或
watch(() => {
    console.log(refCount.value);
});
```   

2. 监视 reative 数据
```   
watch(
    () => state.count,
    (newVal, oldVal) => {
        console.log(newVal,oldVal);
    },
    {
        lazy: true  //在 watch 被创建的时候，不执行回调函数中的代码，就是第一次不运行
    }
    );
```   

3. 监视 ref 类型数据源
```   
const cont = ref(0)
watch(count, (newCount , prevCount) => {
     console.log(newCount)  //新的 count 值
     console.log('-------------------')
     console.log(prevCount)   //旧的 name 值
},
{
    lazy: true
}
);
```   
### 补充 监视多个数据源
方法一：reactive 数据
```   
const state = reative({ count: 0, name: 'zs' })

watch(
    [() => state.count, () => state.name],  //需要被监视的多个 reactive 数据源
    ([newCount, newName], [prevCount, prevName]) => {
        console.log(newCount)  //新的 count 值
        console.log(newName)   //新的 name 值
        console.log('-------------------')
        console.log(prevCount)  //旧的 count 值
        console.log(prevName)   //旧的 name 值
    },
    {
        lazy:ture    //在 watch 被创建的时候，不执行回调函数中的代码
    }
    )
```   

方法二： ref 数据
```   
const count = ref(0)
const name = ref('zs')

watch(
    [count,name]    //需要被监视的多个 ref 数据源
    ([newCount, newName], [prevCount, prevName]) => {
        console.log(newCount)  //新的 count 值
        console.log(newName)   //新的 name 值
        console.log('-------------------')
        console.log(prevCount)  //旧的 count 值
        console.log(prevName)   //旧的 name 值
    },
    {
        lazy:ture    //在 watch 被创建的时候，不执行回调函数中的代码
    }
    }
)
```   

5. 清除监视
```   
// 创建监视，并得到 停止函数
const stop = watch(() => {
    /*...*/
})

// 调用停止函数，清除对应的监视
stop()
```   

6. 清除 watch 中清除无效的异步任务
```   
const kw = ref(0)
const asyncPint = val => {
    return setTimeout(() =>{
        console.log(val)
    },1000)
}

watch(
    kw,
    (newKw, prevKw, onClean ) => {
        // 执行异步任务，并得到关闭异步任务的 timeId
        const timeId = asyncPrint(newKw)

        // 如果 watch 监听被重复执行了，则会先清除上次未完成的异步任务
        onCleanup(() => clearTimeout(timeId))
    },
    {
    lazy:true
    }
    )
```   