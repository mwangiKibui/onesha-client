<template></template>
<script>
export default {
    props: {
        slug: String
    },
    beforeCreate(){    
        let urlParams = window.location.pathname;
        window.location.href= 'http://demo.onesha.co.ke' + urlParams;
    }
}
</script>