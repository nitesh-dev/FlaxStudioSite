<script setup lang='ts'>

defineProps<{
    isAdmin: boolean,
    approveCount: number,
    projectCount: number,
    memberCount: number,
    activeProjCount: number
}>()

const activeTabIndex = ref(0)
const emit = defineEmits({
    Click: (index: number) => {
        return index
    }
})


function changeTab(index: number) {
    if (activeTabIndex.value == index) return
    activeTabIndex.value = index
    emit('Click', index)
}





</script>
<template>
    <aside>
        <h2>Flax Studio</h2>
        <hr>
        <ul>
            <li :class="{ 'active': activeTabIndex == 0 }" @click="changeTab(0)">
                <span class="marker"></span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.803a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.747V9.944c0-.663.293-1.292.8-1.72l6.75-5.692Zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.803c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.5c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V9.944a.75.75 0 0 0-.267-.573l-6.75-5.692Z" />
                </svg>
                <span>Home</span>
                <span class="end">{{ activeProjCount }}</span>
            </li>
            <li :class="{ 'active': activeTabIndex == 1 }" @click="changeTab(1)">
                <span class="marker"></span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m18.492 2.33 3.179 3.179a2.25 2.25 0 0 1 0 3.182l-2.584 2.584A2.25 2.25 0 0 1 21 13.5v5.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h5.25a2.25 2.25 0 0 1 2.225 1.915L15.31 2.33a2.25 2.25 0 0 1 3.182 0ZM4.5 18.75c0 .414.336.75.75.75l5.999-.001.001-6.75H4.5v6Zm8.249.749h6.001a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-6.001v6.75Zm-2.249-15H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75Zm2.25 4.81v1.94h1.94l-1.94-1.94Zm3.62-5.918-3.178 3.178a.75.75 0 0 0 0 1.061l3.179 3.179a.75.75 0 0 0 1.06 0l3.18-3.179a.75.75 0 0 0 0-1.06l-3.18-3.18a.75.75 0 0 0-1.06 0Z" />
                </svg>
                <span>Projects</span>
                <span class="end">{{ projectCount }}</span>
            </li>
            <li :class="{ 'active': activeTabIndex == 2 }" @click="changeTab(2)">
                <span class="marker"></span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                    <path
                        d="M15.75 2a2.25 2.25 0 0 1 2.245 2.096L18 4.25v.749L19.75 5a2.25 2.25 0 0 1 2.245 2.096L22 7.25v9.5a2.25 2.25 0 0 1-2.096 2.245L19.75 19H18v.75a2.25 2.25 0 0 1-2.096 2.245L15.75 22h-7.5a2.25 2.25 0 0 1-2.245-2.096L6 19.75V19H4.25a2.25 2.25 0 0 1-2.245-2.096L2 16.75v-9.5a2.25 2.25 0 0 1 2.096-2.245L4.25 5 6 4.999V4.25a2.25 2.25 0 0 1 2.096-2.245L8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.743.648L7.5 4.25v15.5c0 .38.282.694.648.743l.102.007h7.5a.75.75 0 0 0 .743-.648l.007-.102V4.25a.75.75 0 0 0-.648-.743L15.75 3.5ZM6 6.499 4.25 6.5a.75.75 0 0 0-.743.648L3.5 7.25v9.5c0 .38.282.694.648.743l.102.007H6V6.499Zm13.75.001L18 6.499V17.5h1.75a.75.75 0 0 0 .743-.648l.007-.102v-9.5a.75.75 0 0 0-.75-.75Z" />
                </svg>
                <span>Members</span>
                <span class="end">{{ memberCount }}</span>

            </li>
            <li :class="{ 'active': activeTabIndex == 3 }" @click="changeTab(3)">
                <span class="marker"></span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.125 13.995a2.737 2.737 0 0 0-.617 1.5h-5.26a.749.749 0 0 0-.748.75v.577c0 .536.191 1.054.539 1.461 1.177 1.379 2.984 2.12 5.469 2.205.049.57.273 1.09.617 1.508h-.129c-3.145 0-5.531-.905-7.098-2.739A3.75 3.75 0 0 1 2 16.822v-.578c0-1.19.925-2.164 2.095-2.243l.154-.006h5.876Zm4.621-2.5h3c.648 0 1.18.492 1.244 1.123l.007.127-.001 1.25h1.25c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-8a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75h1.25v-1.25c0-.647.492-1.18 1.123-1.243l.127-.007h3-3Zm5.5 4h-8a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Zm-2.75-2.5h-2.5v1h2.5v-1ZM9.997 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
                <span>Profile</span>
            </li>

            <li :class="{ 'active': activeTabIndex == 4 }" @click="changeTab(4)">
                <span class="marker"></span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.562 3a7.5 7.5 0 0 0-6.798 10.673l-.724 2.842a1.25 1.25 0 0 0 1.504 1.524c.75-.18 1.903-.457 2.93-.702A7.5 7.5 0 1 0 9.561 3Zm-6 7.5a6 6 0 1 1 3.33 5.375l-.244-.121-.264.063c-.923.22-1.99.475-2.788.667l.69-2.708.07-.276-.13-.253a5.971 5.971 0 0 1-.664-2.747Zm11 10.5c-1.97 0-3.762-.759-5.1-2h.1c.718 0 1.415-.089 2.08-.257.865.482 1.86.757 2.92.757.96 0 1.866-.225 2.67-.625l.243-.121.264.063c.922.22 1.966.445 2.74.61-.175-.751-.414-1.756-.642-2.651l-.07-.276.13-.253a5.971 5.971 0 0 0 .665-2.747 5.995 5.995 0 0 0-2.747-5.042 8.44 8.44 0 0 0-.8-2.047 7.503 7.503 0 0 1 4.344 10.263c.253 1.008.509 2.1.671 2.803a1.244 1.244 0 0 1-1.467 1.5 132.62 132.62 0 0 1-2.913-.64 7.476 7.476 0 0 1-3.088.663Z" />
                </svg>
                <span>Chats</span>
                <span class="end">0</span>
            </li>

            <li v-if="isAdmin" :class="{ 'active': activeTabIndex == 5 }" @click="changeTab(5)">
                <span class="marker"></span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.04 5.493a3 3 0 1 1 5.918.002l2.433-.908a2.359 2.359 0 0 1 1.766 4.372L16 10.334v.84a6.456 6.456 0 0 0-1.5.558V9.843a.75.75 0 0 1 .45-.688l3.608-1.57a.858.858 0 0 0-.643-1.592l-4.78 1.783c-.35.143-.734.222-1.135.222a2.99 2.99 0 0 1-1.17-.237L5.936 5.936a.85.85 0 0 0-.64 1.574l3.755 1.653a.75.75 0 0 1 .448.686v3.735a.75.75 0 0 1-.041.245L7.536 19.4a.82.82 0 0 0 1.545.549l1.65-4.527c.174-.478.551-.764.967-.857a6.526 6.526 0 0 0-.58 4.174l-.628 1.723a2.32 2.32 0 0 1-4.372-1.55L8 13.457v-3.12L4.693 8.884A2.35 2.35 0 0 1 6.461 4.53l2.58.962Zm1.46-.495a1.5 1.5 0 0 0 .896 1.373 1.75 1.75 0 0 0 1.187.01A1.5 1.5 0 1 0 10.5 4.997ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708Z" />
                </svg>
                <span>Approve</span>
                <span class="end">{{ approveCount }}</span>
            </li>


        </ul>

    </aside>
</template>
<style scoped>
aside {
    position: sticky !important;
    top: 0;
    background-color: var(--surface-variant-color);
    height: 100vh;
    cursor: context-menu;
}

aside h2 {
    font-size: var(--big-font);
    margin: 1.5rem 1rem;
    color: var(--color-primary-variant);
}

aside hr {
    margin: 1rem 0.6rem;
    border: none;
    border-top: 1px solid var(--surface-dark-color);
}

aside ul {
    list-style-type: none;
    padding: 0;
}


aside .marker {
    background-color: var(--color-primary);
    width: 6px;
    height: 10%;
    display: block;
    position: absolute;
    top: 50%;
    left: -8px;
    translate: 0 -50%;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: all 200ms;
}

aside li {
    position: relative;
    padding: 1rem;
    display: flex;
    align-items: center;
    color: var(--color-on-secondary);
    fill: var(--color-on-secondary);
    gap: 1rem;
    font-weight: 600;
}

aside li .end {
    margin-left: auto;
}


aside li svg {
    fill: inherit;
}

aside li.active {
    color: var(--color-primary-variant);
    fill: var(--color-primary-variant);
    background-color: var(--color-primary-variant-light) !important;
}

aside li.active .marker {
    height: 60%;
    left: 0;
    background-color: var(--color-primary-variant);
}


aside li:hover {
    background-color: var(--color-primary-light);
}

aside li:hover .marker {
    height: 60%;
    left: 0;
}</style>