<script setup lang='ts'>
import { releasedAppsData } from '../../data/CommonData';
import { ProductPageData } from '../../data/DataType'

const router = useRouter()
const { params } = router.currentRoute.value

const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3001'
const dataUrl = serverUrl + '/product/' + params.product_id

let pageData: ProductPageData = {
    _id: '',
    name: '',
    landingDescription: '',
    landingImageUrl: '',
    playStoreUrl: '',
    productSeoTitle: '',
    productSeoDesc: '',
    productAboutDesc: '',
    productAboutEndDesc: '',
    productFeatures: ''
}

const productFeatures = Array<{ heading: string, description: string }>()


// fetch data from server for ssr
const { data, error } = await useFetch(dataUrl)
if (data.value != null) {
    pageData = data.value as ProductPageData

    // extracting features
    const features = pageData.productFeatures.split('|')
    features.forEach(item => {
        const sub = item.split('--:')
        if (sub.length == 2) {
            productFeatures.push({ heading: sub[0], description: sub[1] })
        }
    });

} else {
    throw { message: 'Requested page could not be found.', statusCode: error.value?.statusCode || 404 }
}

useServerSeoMeta({
    title: pageData.productSeoTitle,
    ogTitle: pageData.productSeoTitle,
    description: pageData.productSeoDesc,
    ogDescription: pageData.productSeoDesc,
    ogImage: pageData.landingImageUrl,
    twitterCard: 'summary_large_image',
})


</script>
<template>
    <HeaderComponent />
    <AppLanding :description="pageData.landingDescription" :app-name="pageData.name" :app-link="pageData.playStoreUrl"
        :app-images-link="pageData.landingImageUrl" :privacy-link="'/privacy/' + pageData._id" />

    <AboutApp :about="pageData.productAboutDesc" />
    <AppFeatures :details="productFeatures" :ending="pageData.productAboutEndDesc" />

    <AppsAndGames :data="releasedAppsData" />
    <!-- <AppPrivacyCard :privacy-link="'./draw-on/privacy'" /> -->
    <FooterComponent />
</template>
<style scoped></style>