<template>
    <div>
        <TitlePage titleText="About" />
    </div>
</template>

<script>
    import TitlePage from "../components/ui/TitlePage"
    export default {
        head: {
            title: "A propos",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My description meta data'
                }
            ]

        },
        components: {
          TitlePage  
        }
        
    }
</script>

<style lang="scss" scoped>

</style>