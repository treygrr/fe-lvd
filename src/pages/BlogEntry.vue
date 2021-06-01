<template>
  <q-page style="background-color: rgba(255,255,255, .4); box-sizing: border-box;" class="Page column items-sm-center q-pa-sm">
    <section class="Content q-pa-sm">
      <div class="CardOuter q-pa-lg flex row items-center">
        <div class="AvatarFrame">
          <img src="https://i.picsum.photos/id/250/200/200.jpg?hmac=23TaEG1txY5qYZ70amm2sUf0GYKo4v7yIbN9ooyqWzs" alt="User Avatar Photo">
        </div>
        <div class="CardInfo q-pl-lg">
          <h2>Title Blog Post</h2>
          <p><b>Author:</b> Gilbert Rogers</p>
          <p><b>Date:</b> Gilbert Rogers</p>
          <span class="TagCard">SomeTag</span>          
          <span class="TagCard">SomeTag</span>
          <span class="TagCard">SomeTag</span>
          <span class="TagCard">SomeTag</span>
          <span class="TagCard">SomeTag</span>
          <span class="TagCard">SomeTag</span>

        </div>
        <p style="width: 100%;" class="q-mt-lg">
          I'm a gamer, although my gaming time has drastically reduced in the past 10 years. 
          I enjoy WoW when the expansion isn't garbage. 
          League of Legends, Bioshock Series, Neopets (yes neopets), Digmon World, Toontown, Pokemon (though the mainline series is recycled as much as the next game), 
          and Call of Duty.

          I like just about all music. 🎶

          My heavy rotation at the moment is Glass Animals, Nicki Minaj, Cardi B, Kid Cudi, NF, J. Cole, Frank Ocean, and Panic! at the disco!.
          I'm a gamer, although my gaming time has drastically reduced in the past 10 years. 
          I enjoy WoW when the expansion isn't garbage. 
          League of Legends, Bioshock Series, Neopets (yes neopets), Digmon World, Toontown, Pokemon (though the mainline series is recycled as much as the next game), 
          and Call of Duty.

          I like just about all music. 🎶

          My heavy rotation at the moment is Glass Animals, Nicki Minaj, Cardi B, Kid Cudi, NF, J. Cole, Frank Ocean, and Panic! at the disco!.

          I'm a gamer, although my gaming time has drastically reduced in the past 10 years. 
          I enjoy WoW when the expansion isn't garbage. 
          League of Legends, Bioshock Series, Neopets (yes neopets), Digmon World, Toontown, Pokemon (though the mainline series is recycled as much as the next game), 
          and Call of Duty.

          I like just about all music. 🎶

          My heavy rotation at the moment is Glass Animals, Nicki Minaj, Cardi B, Kid Cudi, NF, J. Cole, Frank Ocean, and Panic! at the disco!.
          I'm a gamer, although my gaming time has drastically reduced in the past 10 years. 
          I enjoy WoW when the expansion isn't garbage. 
          League of Legends, Bioshock Series, Neopets (yes neopets), Digmon World, Toontown, Pokemon (though the mainline series is recycled as much as the next game), 
          and Call of Duty.

          I like just about all music. 🎶

          My heavy rotation at the moment is Glass Animals, Nicki Minaj, Cardi B, Kid Cudi, NF, J. Cole, Frank Ocean, and Panic! at the disco!.
          I'm a gamer, although my gaming time has drastically reduced in the past 10 years. 
          I enjoy WoW when the expansion isn't garbage. 
          League of Legends, Bioshock Series, Neopets (yes neopets), Digmon World, Toontown, Pokemon (though the mainline series is recycled as much as the next game), 
          and Call of Duty.

          I like just about all music. 🎶

          My heavy rotation at the moment is Glass Animals, Nicki Minaj, Cardi B, Kid Cudi, NF, J. Cole, Frank Ocean, and Panic! at the disco!.
        </p>
      </div>
    </section>
  </q-page>
</template>
<style lang="scss" scoped>
.Page {
  width: 100vw;
  box-sizing: border-box;
}
.TagCard {
  background-color: lightblue;
  padding: 5px;
  border-radius: 10px;
  margin-right: 10px;
  &.TagCard:last-child {
    margin-right: 0;
  }
}

h2 {
  font-size: 24px;
  line-height: 34px;
  color: rgba(0, 0, 0, .7);
  margin: 0;
}

h4 {
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  margin-bottom: 1vh;
}
.Content {
  width: 70vw;
  box-sizing: border-box;
  background-color: rgb(255, 246, 193);
  border-radius: 10px;
}
.CardOuter {
  width: 100%;
  color: rgba(0, 0, 0, .7);
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;
    & > .AvatarFrame {
      max-width: 100px;
      max-height: 100px;
      box-sizing: border-box;
      border-radius: 100%;
      overflow: hidden;
      & > img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
  }
}
.CardInfo {
  box-sizing: border-box;
  color: rgba(0, 0, 0, .4);
  & > p {
    margin: 0;
  }
}
@media only screen and (max-width: 600px) {
  .Content {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>

<script>
export default {
  name: 'BlogEntryPage'
}
</script>
