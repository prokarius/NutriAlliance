<template>
    <Page class="Page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <GridLayout rows="auto,auto">
            <StackLayout row="0">
                <Label class="bold" :text="city"></Label>
                <Label :text="summary"></Label>
                <Image class="weather-image" :src="image" />

                <GridLayout class="weather-box" columns="1*,1*" rows="auto">
                    <Label col="0" row="0" class="large" :text="currentTemperature"></Label>
                    <StackLayout col="1" row="0">
                        <Label class="small bold" text="details"></Label>
                        <StackLayout class="hr-light tight"></StackLayout>
                        <Label class="small" :text="humidity"></Label>
                        <Label class="small" :text="windSpeed"></Label>
                        <Label class="small" :text="visibility"></Label>
                    </StackLayout>
                </GridLayout>
            
            </StackLayout>
            
            <StackLayout row="1">
                <Label :text="day"></Label>
                <Label :text="time"></Label>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
export default {
    data () {
        return {
        };
    },
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
