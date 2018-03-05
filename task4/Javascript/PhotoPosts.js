;(function() {

    photoPosts = [
        {
            id: "1",
            description: "Команда Квазификсики в очередной раз взяла уверенное 42-ое место на Мозгобойне",
            createdAt: new Date("2017-09-09T22:50"),
            author: "Kuzmik.A",
            photoLink: "https://pp.userapi.com/c836523/v836523495/618b2/KDpXx7HSw88.jpg",
            hashtags: ["#fun","#play","#friends","#love"],
            likes: ["Kuzmik.A", "Александр Валай", "Aggressive_elf"]
        },
        {
            id: "2",
            description: "Гроза Столбцов",
            createdAt: new Date("2017-10-19T15:20"),
            author: "Александр Валай",
            photoLink: "https://pp.userapi.com/c841629/v841629846/2e974/V2X0NcO1reg.jpg",
            hashtags: ["#funny","#cool"],
            likes: ["Kuzmik.A", "Aggressive_elf"]
        },
        {
            id: "3",
            description: "Попугаи-неразлучники сидят и смотрят своими глазами",
            createdAt: new Date("2016-10-19T19:10"),
            author: "Kuzmik.A",
            photoLink: "http://moikesha.ru/wp-content/uploads/2016/04/ptichki-nerazluchniki.jpg",
            hashtags: ["#beauty","#nature"],
            likes: ["Kuzmik.A", "Aggressive_elf", "m.wayts"]
        }
        ,
        {
            id: "4",
            description: "Прощайте, школьные годы!",
            createdAt: new Date("2017-05-31T23:50"),
            author: "Songsterr2001",
            photoLink: "https://pp.userapi.com/c836523/v836523495/618b2/KDpXx7HSw88.jpg",
            hashtags: ["#school","#sad","#friends", "love"],
            likes: ["Kuzmik.A", "Александр Валай", "Aggressive_elf","m.wayts","agus1998"]
        },
        {
            id: "5",
            description: "Мои защитники!",
            createdAt: new Date("2018-02-19T15:20"),
            author: "Aggressive_elf",
            photoLink: "https://pp.userapi.com/c841127/v841127321/5763a/hu6dfc4BpWA.jpg",
            hashtags: ["#cat","#cool", "#frined", "#love", "#pet"],
            likes: ["Kuzmik.A", "Aggressive_elf"]
        },
        {
            id: "6",
            description: "Самая большая змея в мире - анаконда",
            createdAt: new Date("2015-07-19T12:10"),
            author: "Kuzmik.A",
            photoLink: "http://repin.info/sites/default/files/pages/26659.jpg",
            hashtags: ["#snake","#nature", "#scary"],
            likes: ["Kuzmik.A", "Aggressive_elf", "m.wayts", "Steve Irwin"]
        }
        ,
        {
            id: "7",
            description: "Летел на самолете, очень понравилось ",
            createdAt: new Date("2015-07-19T12:10"),
            author: "Yastrebova.V",
            photoLink: "https://i.ytimg.com/vi/CaGHyharyBg/maxresdefault.jpg",
            hashtags: ["#plane", "#high", "#wow"],
            likes: ["Kuzmik.A", "Aggressive_elf", "m.wayts", "Steve Irwin", "Songsterr2001"]
        }
        ,
        {
            id: "8",
            description: "Концерт был прекрасным, рад, что сходил",
            createdAt: new Date("2015-07-19T12:10"),
            author: "Илья Пинхасик",
            photoLink: "https://img.afisha.tut.by/img/user.files/04/f/foto-1-rammstein-show-9010451.jpg",
            hashtags: ["#rammstein", "#music", "#german"],
            likes: ["Kuzmik.A", "Aggressive_elf", "m.wayts", "Steve Irwin", "Songsterr2001", "Till Lindemann"]
        }
        ,
        {
            id: "9",
            description: "Ждите, скоро буду ",
            createdAt: new Date("2015-07-19T12:10"),
            author: "Леонид Самосвал",
            photoLink: "http://cdn.tvc.ru/pictures/o/228/617.jpg",
            hashtags: ["#за_решеткой", "#мама_прости", "#кпз"],
            likes: ["Kuzmik.A", "Aggressive_elf", "m.wayts", "Steve Irwin", "Songsterr2001", "Till Lindemann", "TvoiOper"]
        }
        ,
        {
            id: "10",
            description: "Нормально с пацанами посидели",
            createdAt: new Date("2016-07-01T12:10"),
            author: "Альберт Эйнштейн",
            photoLink: "http://bublink.ru/uploads/posts/2015-10/1443944745_the-solvay-conference-probably-the-most-intelligent-picture-ever-taken-1927-1.jpg",
            hashtags: ["#science", "#пленка", "#коллеги"],
            likes: ["Kuzmik.A", "Aggressive_elf", "Никола Тесла", "Steve Irwin", "Songsterr2001",
                "Till Lindemann"]
        }
        ,
        {
            id: "11",
            description: "Сегодня ходили на охоту. Меня подстрелили.",
            createdAt: new Date("2015-07-19T12:10"),
            author: "Хеминг",
            photoLink: "http://park72.ru/wp-content/uploads/2017/05/new-backgorund-e1477280046797.jpg",
            hashtags: ["#охота", "#природа", "#друзья"],
            likes: ["Kuzmik.A", "Aggressive_elf", "Никола Тесла", "Steve Irwin", "Songsterr2001",
                "Till Lindemann", "wolf2005", "rabbit3432"]
        }
        ,
        {
            id: "12",
            description: "Плавали над коралловыми рифами, очень красиво, но дорого ",
            createdAt: new Date("2017-06-31T15:10"),
            author: "SomebodyOnceToldMe",
            photoLink: "http://katyaburg.ru/sites/default/files/pictures/krasota_prirody/korally_rif_kartinki_foto_10.jpg",
            hashtags: ["#sea", "#fish", "#and", "#chips"],
            likes: ["Kuzmik.A", "SpongeBob", "Никола Тесла", "Steve Irwin", "Songsterr2001",
                "Till Lindemann", "wolf2005", "rabbit3432"]
        }
        ,
        {
            id: "13",
            description: "За структуру - 5!",
            createdAt: new Date("2016-05-12T17:10"),
            author: "Юрий Хованский",
            photoLink: "http://www.pravilnoe-pokhudenie.ru/recepty/vkusnaia-sochnaia-shaurma-s-kuricei-1.jpg",
            hashtags: ["#шаверма", "#еда", "#богов", "#love"],
            likes: ["Kuzmik.A", "SpongeBob", "Никола Тесла", "Tesak", "Songsterr2001", "Till Lindemann", "wolf2005"]
        }
        ,
        {
            id: "14",
            description: "Сегодня с ребятами играли футбол. Жаль, что проиграли!",
            createdAt: new Date("2016-05-12T17:10"),
            author: "СборнаяРоссииОфишл",
            photoLink: "http://www.interfax.ru/ftproot/textphotos/2017/10/13/ftb700.jpg",
            hashtags: ["#футбол", "#спорт", "#friends", "#love"],
            likes: ["СборнаяРоссииОфишл"]
        }
        ,
        {
            id: "15",
            description: "Великий русский народ смотрит на меня, а я и рад",
            createdAt: new Date("2015-12-12T17:10"),
            author: "Михаил Задорнов",
            photoLink: "http://img2.ntv.ru/home/news/20171110/zadornov_io.jpg",
            hashtags: ["#юмор", "#славяне", "#смекалочка"],
            likes: ["Kuzmik.A", "SpongeBob", "Никола Тесла", "Steve Irwin", "Songsterr2001",
                "Till Lindemann", "wolf2005", "rabbit3432", "Putin"]
        }
        ,
        {
            id: "16",
            description: "Шёл по улице и споткнулся о голодающего, папа пообещал, что обложит голод налогом," +
            " чтоб такого больше не было. Ура!",
            createdAt: new Date("2016-05-12T17:10"),
            author: "Коленька",
            photoLink: "http://www.korova.ru/humor/pics/1400/606779-untitled2.jpg",
            hashtags: ["#love", "#всемПо500", "#свой"],
            likes: ["ЛучшыйБацька"]
        }
        ,
        {
            id: "17",
            description: "Кто тут такая красивая и самая лучшая на свете собачка?",
            createdAt: new Date("2016-05-12T17:10"),
            author: "Aggressive_elf",
            photoLink: "https://pp.userapi.com/c633921/v633921885/521d/WGTQi6fBm6s.jpg",
            hashtags: ["#love", "#cute", "#friend", "#dog"],
            likes: ["Kuzmik.A", "SpongeBob", "Никола Тесла", "Steve Irwin", "Songsterr2001", "Till Lindemann",
                "wolf2005", "rabbit3432", "Putin", "Коленька"]
        }
        ,
        {
            id: "18",
            description: "Делаю вручную 18-ый элемент массива. Это сложнее, чем писать код.А на фотке пусть будет" +
            "снова милое животное.",
            createdAt: new Date("2018-03-05T17:14"),
            author: "Kuzmik.A",
            photoLink: "http://nashi-kroliki.com/images/pictures/bolezni9/15.jpg",
            hashtags: ["#сколько", "#это", "#может", "#продолжаться"],
            likes: [ "SpongeBob", "Никола Тесла", "Steve Irwin","Harru Potter", "Songsterr2001", "Till Lindemann",
                "wolf2005", "rabbit3432", "Putin", "Коленька"]
        }
        ,
        {
            id: "19",
            description: "Хочу купить гитару шоб все девчонки были моими!",
            createdAt: new Date("2017-09-15T12:43"),
            author: "Songsterr2001",
            photoLink: "https://i.ytimg.com/vi/Otcf8eFowEs/maxresdefault.jpg",
            hashtags: ["#music", "#cool", "#guitar", "#girls"],
            likes: [ "13_летняя_девочка", "SpongeBob", "Никола Тесла", "Steve Irwin","Harru Potter", "Songsterr2001",
                "Till Lindemann", "wolf2005", "rabbit3432", "Putin", "Коленька", "Ed Sheeran"]
        }
        ,
        {
            id: "20",
            description: "Я на выборы никогда не ходил, но в этот раз точно пойду за Грудинина голосовать, кандидат от народа!",
            createdAt: new Date("2018-03-05T17:01"),
            author: "Kremlebot2251",
            photoLink: "https://sun9-4.userapi.com/c840622/v840622339/54cfe/azJyzbxebe4.jpg",
            hashtags: ["#communism", "#коммунизм", "#выборы", "#крымнаш"],
            likes: ["Kremlebot2251","Kremlebot2252","Kremlebot2253","Kremlebot2151","Kremlebot0051","Kremlebot2080" ]
        }
    ]
    
    

  function getPhotoPosts(skip, top, filterConfig) {
      if(skip===undefined)
        skip = 0;
      if(top===undefined)
        top = 10;
      if(filterConfig===undefined)
        filterConfig = {};
      var buffPhotoPosts = [];
      buffPhotoPosts = photoPosts.slice(0,photoPosts.length);
      if(filterConfig!==undefined) {
          if ("author" in filterConfig)
              filterByAuthor(buffPhotoPosts, filterConfig.author);
          if ("createdAt" in filterConfig)
              filterByDate(buffPhotoPosts, filterConfig.createdAt);
          if("hashtags" in filterConfig)
              filterByHashtags(buffPhotoPosts, filterConfig.hashtags);
      }
      if(skip > buffPhotoPosts.length)
        return null;
      if(top > buffPhotoPosts.length)
        top = buffPhotoPosts.length;
      sortByDate(buffPhotoPosts);
      var result = buffPhotoPosts.slice(skip,top);
      return result;
  }
  
  function filterByAuthor(array, value) {
      for(var i = 0 ; i < array.length; i++)
          if(array[i].author!==value) {
              array.splice(i, 1);
              i--;
          }
      return;
  }

  function filterByHashtags(array, value){
        for(var i = 0; i < value.length; i++) {
            for(var j = 0; j < array.length; j++)
                if(array[j].hashtags.indexOf(value[i])==-1)
                {
                    array.splice(j,1)
                    j--;
                }
        }
  }

  function filterByDate(array, value) {
      for(var i = 0 ; i < array.length; i++)
          if(array[i].createdAt!==value) {
              array.splice(i, 1);
              i--;
          }
      return;
    }

  function sortByDate(array) {
      array.sort(function (a,b){
        return b.createdAt - a.createdAt;
      } )
  }
  function getPhotoPost(id){
      if(id === undefined)
        return null;
      for(var i = 0; i < photoPosts.length; i++){
        if(photoPosts[i].id == id)
          return photoPosts[i];
      }
      return null;
  }

  function validatePhotoPost(photoPost) {
      if(!"id" in photoPost || photoPost.id < 1)
          return false;
      if(!"description" in photoPost || photoPost.description.length > 200)
          return false;
      if(!"createdAt" in photoPost)
          return false;
      if(!"author" in photoPost || photoPost.author.length == 0)
          return false;
      if(!"photoLink" in photoPost || photoPost.photoLink.length == 0)
          return false;
      if(!"hashtags" in photoPost || !validateHashtags(photoPost.hashtags))
          return false;
      if(!"likes" in photoPost)
          return false;
      return true;
  }

  function validateHashtags(array) {
      for(var i = 0 ; i < array.length; i++)
      {
          if(array[i].charAt(0)!='#')
              return false;
          for(var j = 1 ; j < array[i].length; j++)
              var ch = array[i].charAt(j)
              if(ch == ' ' || ch == '.' || ch == ',')
                  return false;
      }
      return true;
  }

  function addPhotoPost(photoPost){
      if(validatePhotoPost(photoPost) && getPhotoPost(photoPost.id) == null) {
          photoPosts.push(photoPost);
          return true;
      }
      return false;
  }

  function editPhotoPost(id, photoPost) {
      if (getPhotoPost(id) == null)
          return false;
      var buffer = getPhotoPost(id);
      var description_backup = buffer.description;
      var photoLink_backup = buffer.photoLink;
      var hashtags_backup = buffer.hashtags;
      if ("description" in photoPost){
        buffer.description = photoPost.description;
      }
      if("photoLink" in photoPost) {
        buffer.photoLink = photoPost.photoLink;
      }
      if("hashtags" in photoPost)
          buffer.hashtags = photoPost.hashtags.slice(0,photoPost.hashtags.length);
      if(validatePhotoPost(buffer))
        return true;
      else {
        buffer.description = description_backup;
        buffer.photoLink = photoLink_backup;
        buffer.hashtags = hashtags_backup;
        return false;
      }
  }

  function removePhotoPost(id) {
      for(var i = 0 ; i < photoPosts.length; i++)
        if(photoPosts[i].id == id) {
            photoPosts.splice(i, 1);
            return true;
        }
      return false;
  }
  
    function consoleWork() {
        console.log("Получение первых 10ти(или менее) постов с хештегом #love и автором Aggressive_elf," +
            " отсортированных по дате")
        console.log(getPhotoPosts(0,10,{ hashtags: ["#love"], author: "Aggressive_elf"}));

        console.log("Проверка на валидность фотопоста с правильными полями:");
        console.log(getPhotoPost(1));
        if(validatePhotoPost(photoPosts[0]))
            console.log("Object is valid");
        else
            console.log("Object is invalid");
        console.log("Проверка на валидность фотопоста с хештегом без решетки")
        inv_post = {
            id: "29",
            description: "Милый котик",
            createdAt: new Date("2017-12-19T09:20"),
            author: "Aggressive_elf",
            photoLink: "https://cs6.pikabu.ru/images/big_size_comm/2014-05_4/14002385113218.jpg",
            hashtags: ["cute","#play"],
            likes: ["Kuzmik.A", "Aggressive_elf"]
        };
        console.log(inv_post)
        if(validatePhotoPost(inv_post))
            console.log("Object is valid");
        else
            console.log("Object is invalid");


        console.log("Проверка на валидность фотопоста с описанием длиной более 200 символов");
        console.log(inv_post)
        inv_post.description = "SomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeText" +
            "SomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeText" +
            "SomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeText" +
            "SomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeText";
        if(validatePhotoPost(inv_post))
            console.log("Объект не валидный");
        else
            console.log("Объект валидный");


        add_post = {
            id: "21",
            description: "Милый котик",
            createdAt: new Date("2017-12-19T09:20"),
            author: "Aggressive_elf",
            photoLink: "https://cs6.pikabu.ru/images/big_size_comm/2014-05_4/14002385113218.jpg",
            hashtags: ["#cute","#play"],
            likes: ["Kuzmik.A", "Aggressive_elf"]
        };
        console.log("\nПроверка на возможность добавления фотопоста с корректными данными");
        console.log(add_post)
        if(addPhotoPost(add_post))
          console.log("Новый фотопост успешно добавлен!");
        else
            console.log("Не удалось добавить новый фотопост!");

        console.log("\nПроверка на возможность добавления фотопоста с ссылкой нулевой длины");
        inv_post.description = "Hello";
        inv_post.photoLink = "";
        console.log(inv_post)
        if(addPhotoPost(inv_post))
            console.log("Новый фотопост успешно добавлен!");
        else
            console.log("Не удалось добавить новый фотопост!");

     /*   console.log("Массив после удаления фотопоста с id = 5");
        removePhotoPost("5");
        console.log(photoPosts);*/
        console.log("Изменение полей поста на не валидные( ссылка нулевой длины)")
        if(editPhotoPost(2,{photoLink: ""}))
            console.log("Успешно изменено");
        else
            console.log("Редактирование не удалось");
        console.log("Изменение полей поста на валидные")
        if(editPhotoPost(2,{photoLink: "https://sun9-4.userapi.com/c840733/v840733819/311a9/1IuG3VlYzP0.jpg"}))
            console.log("Успешно изменено");
        else
            console.log("Редактирование не удалось");

        console.log("Массив после удаления элемента с id = 5 ");
        removePhotoPost(5);
        console.log(photoPosts);

        console.log("Попытка удалить фотопост с несуществующим id = 1000")
        if(removePhotoPost(1000))
            console.log("Успешно удален");
        else
            console.log("Удаление не удалось");

        console.log("Отсортированные по дате первые 20 элементов массива");
        console.log(getPhotoPosts(0,20));
    }
    
    consoleWork();
})();

