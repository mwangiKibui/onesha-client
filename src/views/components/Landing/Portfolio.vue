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
import Hero from "@/components/Common/Hero";
import BasicElements from "@/components/Common/BasicElements";
import Inputs from "@/components/Common/Inputs";
import CustomControls from "@/components/Common/CustomControls";
import Navigation from "@/components/Navigation";
import JavascriptComponents from "@/components/JavascriptComponents";
import Carousel from "@/components/Common/Carousel";
import Icons from "@/components/Common/Icons";
import Examples from "@/components/Common/Examples";
import DownloadSection from "@/components/Common/DownloadSection";

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
