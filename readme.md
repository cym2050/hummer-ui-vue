# 介绍

hummer UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这个组件库是为实践 Vue3 与 typescript，锤炼技术能力而写，全程亲手编写，尽量不采用第三方库，包括你现在看到的这个官网也都是我自己写的。

所以强烈不建议你将此 UI 库用于生产环境。但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。源代码放在了 https://github.com/cym2050/hummer-ui-vue

# 安装

打开终端运行下列命令：

```
npm install hummer-ui-vue
```

或

```
yarn add hummer-ui-vue
```

# 开始使用

然后在你的代码中写入下面的代码

```
import { Button, Tabs, Tab, Switch, Dialog } from "hummer-ui-vue"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "hummer-ui-vue"
export default {
  components: {Button}
}
</script>
```