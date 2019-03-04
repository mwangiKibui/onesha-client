<template></template>
<script>
export default {
    props: {
        slug: String
    },
    beforeCreate(){    
        let urlParams = window.location.pathname;
        window.location.href= 'https://v1.onesha.co.ke' + urlParams;
    }
}
</script>