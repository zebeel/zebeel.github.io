<template>
  <div class="container baby-book">
    <div class="name alert alert-primary" v-show="title">
      <i class="fa-solid fa-chart-simple"></i> Đang phát: {{ title }}
    </div>
    <audio-player
      ref="audioPlayer"
      :audio-list="audioList.map((elm) => elm.url)"
      :before-play="handleBeforePlay"
    />
    <!-- <button @click="handlePlaySpecify">Play the second audio</button> -->
    <ul class="list-group list-group-flush mt-3">
      <li
        :class="`pointer list-group-item ${data.did === currentDID ? 'list-group-item-primary' : ''}`"
        v-for="data of audioData"
        :key="data.folderName"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="(songListModal = data.fileData), (selectedFolderName = data.folderDisplayName)"
      >
        <span>{{ data.folderDisplayName }}</span>
        <span v-if="data.did === currentDID" class="text-secondary" style="font-size: small">
          <br /><i class="fa-solid fa-chart-simple"></i> {{ title }}
        </span>
      </li>
    </ul>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Danh sách audio của [{{ selectedFolderName }}]
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul class="list-group list-group-numbered">
              <li
                v-for="file of songListModal"
                :class="`pointer list-group-item ${file.fid === currentFID ? 'list-group-item-primary' : ''}`"
                :key="file.fileName"
                @click="handlePlaySpecify(file)"
              >
                {{ file.displayName }}
                <span v-if="file.fid === currentFID"><i class="fa-solid fa-chart-simple"></i></span>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from '@liripeng/vue-audio-player'

export default {
  components: {
    AudioPlayer
  },

  data() {
    return {
      title: '',
      audioList: [],
      audioData: [],
      currentDID: 0,
      currentFID: 0,
      songListModal: [],
      selectedFolderName: ''
    }
  },

  async mounted() {
    const response = await fetch(
      'https://raw.githubusercontent.com/zebeel/sach-hay-cho-be/main/media.json'
    )
    const json = await response.json()
    let did = 0,
      fid = 0
    for (const item of json) {
      item.did = did
      for (const file of item.fileData) {
        this.audioList.push({
          name: file.displayName,
          url: `https://github.com/zebeel/sach-hay-cho-be/raw/main/media/${item.folderName}/${file.fileName}`,
          did
        })
        file.fid = fid++
        file.did = did
      }
      did++
    }
    // console.log(json)
    this.title = this.audioList[0].name
    this.audioData = json
  },

  methods: {
    // Use this function if you want to do something before you start playing
    handleBeforePlay(next) {
      this.title = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name
      this.currentDID = this.audioList[this.$refs.audioPlayer.currentPlayIndex].did
      this.currentFID = this.$refs.audioPlayer.currentPlayIndex

      next() // Start play
    },

    handlePlaySpecify(file) {
      this.$refs.audioPlayer.currentPlayIndex = file.fid
      this.$nextTick(() => {
        this.$refs.audioPlayer.play()
        this.title = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&display=swap');
.baby-book {
  font-family: 'Aleo', serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
  border-radius: 0.5em;
  padding: 0.5em;
  margin: auto;
  box-shadow: 0 0 2px 2px white;
  // min-width: 500px;
}
.audio-player {
  padding: 0 20px;
}
.pointer {
  cursor: pointer;
}
</style>
