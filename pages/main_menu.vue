<template>
    <div id="menu">
        <div id="links">
            <router-link to="/play_game" class="menu-button">Play Game</router-link>
            <button class="menu-button" @click="closeGame">Exit</button>
        </div>
    </div>
</template>
  
<script>
export default {
    methods: {
        closeGame() {
            window.close()
        }
    }
}
</script>
  
<style>
#menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#links {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    margin-bottom: 10px;
    background-color: #3f51b5;
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
}

.menu-button:hover {
    background-color: #2f3d85;
}
</style>
  