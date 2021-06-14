<template>
  <q-page style="background-color: rgba(255,255,255, .4); box-sizing: border-box;" class="Page column items-sm-center q-pa-sm">
    <section class="Content q-pa-sm">
      <div class="CardOuter q-mb-sm row items-center">
        <div class="AvatarFrame">
          <img src="https://i.picsum.photos/id/250/200/200.jpg?hmac=23TaEG1txY5qYZ70amm2sUf0GYKo4v7yIbN9ooyqWzs" alt="User Avatar Photo">
        </div>
        <div class="CardInfo q-pl-lg">
          <h2>Gilbert (Trey) Rogers</h2>
          <p><b>Status:</b> Catching a bug!</p>
        </div>
      </div>
      <div class="CardOuter q-mt-lg">
        <h4>Motto:</h4>
        <p>
          I'm 29 years old and still have no clue where I'm going 🤷‍♀️, but know that I have the tools to get where I need to be.
        </p>
        <h4>Short and Sweet</h4>
        <p>
          I'm a gamer, although my gaming time has drastically reduced in the past 10 years. 
          I enjoy WoW when the expansion isn't garbage. 
          League of Legends, Bioshock Series, Neopets (yes neopets), Digmon World, Toontown, Pokemon (though the mainline series is recycled as much as the next game), 
          and Call of Duty.

          I like just about all music. 🎶

          My heavy rotation at the moment is Glass Animals, Nicki Minaj, Cardi B, Kid Cudi, NF, J. Cole, Frank Ocean, and Panic! at the disco!.
        </p>

        <p>
          I love art, I love software, I love computers, I love video games, and I love my husbear. (Ryan😍) 
          I like anime, I like reading, I like learning something new. I think that is partly why I love computers. 
          There is always something to learn.
        </p>
        <p>
          I'm task oriented, and when I am on a task I don't like being distracted. Thanks ADD. 😅 I can hyper focus on some random stupid interest,
          and suddenly 6 hours are gone. I didn't think many people would make it this far in my bio so cudos! 👏
        </p>
        <h4>Technologies</h4>
        <p>
          So here are some technologies that I am familiar with but not limited to (always something to learn): Unix, Linux, Windows, MacOS, Photoshop, Illustrator, Figma, inDesign, Adobe XD, Microsoft Office,
          Slack, Discord, Nginx, Laravel, Docker, Dbeaver, Php, Postgres, MySQL, Nodejs, Deno, Github, VSCode, PhpStorm, Sublime Merge, Github CLI, HTML, CSS, Javascript, Vue, React, Quasar, Electron, Java, Kotlin, Android Studio, C++, xcode, swift, AWS, EC2, Code Deploy,
          Digital Ocean, Droplets, General networking, and general computer hardware(building custom pcs).
           I'm sure there is much more. 🥴
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
h2 {
  font-size: 24px;
  line-height: 34px;
  color: rgba(0, 0, 0, .8);
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
}
.CardOuter {
  width: 100%;
  color: rgba(0, 0, 0, .8);

  box-sizing: border-box;
  border-radius: 10px;
    & > .AvatarFrame {
      max-width: 100px;
      max-height: 100px;
      box-sizing: border-box;
      border-radius: 10px;
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
  color: rgba(0, 0, 0, .8);
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
  name: 'AboutPage'
}
</script>
