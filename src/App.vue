<template>
  <h1>{{ 'hello'.tr() }}</h1>
  <h1>{{ 'howryou'.tr() }}</h1>
  <h1>{{ 'thankyou'.tr() }}</h1>
  <h1>{{ 'okay'.tr() }}</h1>
  <h1>{{ 'cat'.tr() }}</h1>

  <button type="button" class="en" @click="getLanguage({useCustomLanguage: 'en-US'})">
    <img src="https://www.flaticon.com/svg/static/icons/svg/206/206592.svg" alt="">
    English</button>
  <button type="button" class="fr" @click="getLanguage({useCustomLanguage: 'fr-FR'})">
    <img src="https://www.flaticon.com/svg/static/icons/svg/3013/3013893.svg" alt="">
    French</button>
  <button type="button" class="tr" @click="getLanguage({useCustomLanguage: 'tr-TR'})">
    <img src="https://www.flaticon.com/svg/static/icons/svg/206/206634.svg" alt="">
    Turkish</button>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&family=Rock+Salt&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img{
  height: 30px;
}
h1{
  margin-left: 1em;
  margin-top: 1em;
}
button{
  display: inline-flex;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  border: 0;
  color: white;
  margin: 1em 2em;
  padding: .5em 2em;
}
.en{
  background:  #cf142b;
}
.fr{
  background: #ef4135;
}
.en:hover{
  border: 1px solid #fff;
  background: #00247d;
}
.fr:hover{
  border: 1px solid #fff;
  background: #0050a4;
}
.tr{
  background: #E30A17;
}
.tr:hover{
  border: 1px solid #fff;
}

body {
  background: #dedede;
  font-family: "Lato";
}
</style>