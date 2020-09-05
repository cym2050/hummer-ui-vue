<template>
    <div>导航栏 |
        <router-link to='/'>造轮子1</router-link> |
        <router-link to='/xxx'>造轮子2</router-link>
    </div>
    <router-view/>
</template>

<script>

export default {
    name: 'App',
}
</script>
