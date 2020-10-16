# localization_vue_3

## Manage your strings with localization_vue_3 package!

![gif](https://im3.ezgif.com/tmp/ezgif-3-994d3ac4ed49.gif)

### Setup

```
import localization from 'vue_3_localization'
app.use(localization, {language: {useCurrentLanguage: true}}) // language is required
//or 
app.use(localization, {language: {useCustomLanguage: 'tr-TR'}}) // language is required


//if you want change path
app.use(localization, {language: {useCustomLanguage: 'tr-TR'}, customPath: 'your_path_here'}) // language is required


```

```
  <h1>{{ 'hello'.tr() }}</h1>
  <h1>{{ 'howryou'.tr() }}</h1>
  <h1>{{ 'thankyou'.tr() }}</h1>
  <h1>{{ 'okay'.tr() }}</h1>
  <h1>{{ 'cat'.tr() }}</h1>
```

### Folder Structure
![image](https://i.hizliresim.com/wf1coE.png)

### en-EN.json
```
    {
        "hello": "Hello",
        "howryou": "How are you?",
        "thankyou": "Thank you",
        "okay": "Okay",
        "cat": "Cat" 
    }
```

### tr-TR.json
```
   {
        "hello": "Merhaba",
        "howryou": "Nasılsın?",
        "thankyou": "Teşekkür ederim",
        "okay": "Tamam",
        "cat": "Kedi" 
    }
```

### fr-FR.json
```
   {
        "hello": "Salut",
        "howryou": "Comment vas-tu?",
        "thankyou": "Merci",
        "okay": "D'accord",
        "cat": "Chat" 
   }
```

### Change language dynamically

```
 <button type="button" @click="getLanguage({useCustomLanguage: 'fr-FR'})">Change</button>
```

