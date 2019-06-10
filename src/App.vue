<template>
    <div class="full-width center-content">
        <range-component range="30"/>
    </div>
</template>

<script>
    import RangeComponent from './components/RangeComponent'
    import NavigationComponent from './components/NavigationComponent'

    export default {
        components: {
            RangeComponent,
            NavigationComponent
        }
    }
</script>
