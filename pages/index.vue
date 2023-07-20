<template>
    <div class="shared-style">
        <div id="menu" v-if="online">
            <div id="links">
                <router-link to="/play_game" class="button">Play Game</router-link>
                <router-link to="/leaderboard" class="button">Leaderboard</router-link>
                <button class="button" @click="closeGame">Exit</button>
            </div>
        </div>
    </div>
    <div>
        <div v-if="!online" class="message-box">
            You can now close this window
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            online: true
        };
    },
    methods: {
        async closeGame() {
            this.online = false;
            await $exit("exit")
        }
    }
};
</script>
  
<style>
@import './shared_style.css';
</style>
  