<template>
    <div>
        <hero></hero>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <download-section></download-section>
        <carousel></carousel>
    </div>
</template>
<script>
import Hero from "@/views/components/Common/Hero";
import BasicElements from "@/views/components/Common/BasicElements";
import Inputs from "@/views/components/Common/Inputs";
import CustomControls from "@/views/components/Common/CustomControls";
import Navigation from "@/views/components/Navigation";
import JavascriptComponents from "@/views/components/JavascriptComponents";
import Carousel from "@/views/components/Common/Carousel";
import Icons from "@/views/components/Common/Icons";
import Examples from "@/views/components/Common/Examples";
import DownloadSection from "@/views/components/Common/DownloadSection";

export default {
    name: "components",
    components: {
        Hero,
        BasicElements,
        Inputs,
        CustomControls,
        Navigation,
        JavascriptComponents,
        Carousel,
        Icons,
        Examples,
        DownloadSection
    }
};
</script>
