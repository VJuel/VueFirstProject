<script>
    import ButtonCount from "@/components/test/ButtonCount.vue";
    import BlogPost from "@/components/test/BlogPost.vue"
   
    import TabHome from '@/components/test/TabHome.vue';
    import TabProfile from '@/components/test/TabProfile.vue';
    import TabSettings from '@/components/test/TabSettings.vue';
    import ExposeParent from '@/components/test/ExposeParent.vue';

   export default {
    components: {
        ButtonCount,
        BlogPost,
        TabHome,
        TabProfile,
        TabSettings,
        ExposeParent
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'Morning Vue'},
                { id: 2, title: 'Afternon Vue'},
                { id: 3, title: 'Night Vue'}
            ],
            postFontSize: 1,
            currentTab: 'TabHome'
        }
    }
   }
</script>

<template>
    <div>
        <h1>Test page</h1>
        <ButtonCount/>
        <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPost
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                @enlarge-text="postFontSize += 0.1"
            >
            <p>test slot child</p>
            </BlogPost>
        </div>
        <div>
            <button @click="currentTab = 'TabHome'">Home</button>
            <button @click="currentTab = 'TabProfile'">Profile</button>
            <button @click="currentTab = 'TabSettings'">Settings</button>
            <keep-alive>
                <component :is="currentTab"></component>
            </keep-alive>
        </div>
        <ExposeParent/>
    </div>
</template>