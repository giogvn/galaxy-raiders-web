<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Place</th>
          <th>Score</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in scoreData" :key="index">
          <td>{{ index }}</td>
          <td>{{ entry.Score }}</td>
          <td>{{ entry.Date }}</td>
        </tr>
      </tbody>
    </table>

    <div id="leaderboard_link">
      <router-link to="/" class="button">Go to Main Menu</router-link>
      <router-link to="/play_game" class="button">Play Game</router-link>
    </div>
  </div>
</template>

<script>
import data from '../leaderboard.json';

export default {
  data() {
    return {
      scoreData: data,
    };
  },
};
</script>

<style>
@import './shared_style.css';
</style>





