<template>
  <div class="d-flex justify-content-between align-items-center like-card-box px-5">
    <div class="like-image-box">
      <img :src="getImg(this.likeUser.userImg)" class="like-image" alt="profile_img">
    </div>
    <div class="m-l-10 like-card-text">{{ this.likeUser.userNickname }}</div>
    <v-btn class="interview-button elevation-1"
              color="white" text
              @click="clickProfile(likeUser.userNickname)"
            >
              프로필
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    likeUser: Object
  },
  computed: {
    ...mapGetters([
      'fileURL',
    ]),
  },
  methods: {
    clickProfile(userNickname) {
      Swal.fire({ 
          icon: 'question', // Alert 타입 
          title: userNickname + '님의 프로필을 보시겠어요?', // Alert 제목 
          showCancelButton: true,
          confirmButtonText: `네`,
          cancelButtonText: `아니오`,
      })
      .then((res) => {
          if(res.isConfirmed) {
            this.$store.dispatch('mypage/getUserData', userNickname)
            this.$router.push('/mypage/user/' + userNickname)
          }
      })
    },
    getImg(userImg) {
      return (
          this.fileURL + 'ServerFiles/UserImg/' +
          userImg
      )
    },
  },
}
</script>

<style>
.interview-button {
    width: 100px;
    background: #439474;
    padding: 0px;
}

.like-image-box {
    height: 60px;
    width: 60px;
    border-radius: 70%;
    overflow: hidden;
    border: rgb(235, 235, 235) 1px solid;
}

.like-image {
    width: 100%;
    height: 100%;   
    object-fit: cover;
}

.like-card-box {
  background-color: white;
}

.like-card-text {
  font-size: 18px;
}
</style>