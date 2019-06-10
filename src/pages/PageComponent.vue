<template>
    <navigation-component/>
    <div class="full-width center-content">
        <range-component range="30"/>
    </div>
</template>

<script>
    import NavigationComponent from './components/NavigationComponent.vue'
    import RangeComponent from './components/RangeComponent.vue'

    export default {
        components: {
            RangeComponent,
            NavigationComponent
        }
    }
    export default {
        name: "PageComponent"
    }
</script>

<style scoped>

</style>