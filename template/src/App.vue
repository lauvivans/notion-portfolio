<script setup lang="ts">
import {
    Aside,
    Header,
    useStore,
    Tabs,
    useAside,
} from "@lauvivans/kami";
import { useRouter } from "vue-router";
import metadata from "@/metadata";

const router = useRouter();
const { mainContainerClasses, mainContentClasses } = useAside();
const store = useStore;

function handleNavigate(path: string) {
    router.push(path);
}
</script>

<template>
    <div v-if="router.currentRoute.value.name === 'NotFound'">
        <router-view v-slot="{ Component }">
            <component
                :is="Component"
                :previousRoute="router.currentRoute.value.meta.previousRoute"
            />
        </router-view>
    </div>
    <div v-else class="app">
        <div :class="mainContainerClasses">
            <Aside :metadata="metadata" />

            <div :class="mainContentClasses">
                <Tabs @navigate="handleNavigate" />

                <Header :metadata="metadata" />

                <router-view v-slot="{ Component }">
                    <component
                        :is="Component"
                        :activePage="store.getActivePage"
                        :useStore="useStore"
                    />
                </router-view>

                <footer class="footer">by Kami (^.^)</footer>
            </div>
        </div>
    </div>
</template>