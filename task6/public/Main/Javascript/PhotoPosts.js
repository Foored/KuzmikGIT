let photoPostsBackUp = [
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
        photoLink: "http://moikesha.ru/wp-content/uploads/2013/09/nerazluchniki-na-vetke.jpg",
        hashtags: ["#beauty","#nature"],
        likes: ["Kuzmik.A", "Aggressive_elf", "m.wayts"]
    }
    ,
    {
        id: "4",
        description: "Прощайте, школьные годы!",
        createdAt: new Date("2017-05-31T23:50"),
        author: "Songsterr2001",
        photoLink: "http://mosdvor.su/upload/iblock/b0b/b0b5887a41bb382742092a55b71d0200.jpg",
        hashtags: ["#school","#sad","#friends", "love"],
        likes: ["Kuzmik.A", "Александр Валай", "Aggressive_elf","m.wayts","agus1998"]
    },
    {
        id: "5",
        description: "Какой опасный и красивый!",
        createdAt: new Date("2018-02-19T15:20"),
        author: "Aggressive_elf",
        photoLink: "http://img2.ntv.ru/home/news/20160129/tigr_vs.jpg",
        hashtags: ["#cat","#cool", "#friends", "#love", "#pet"],
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
        photoLink: "https://sun9-4.userapi.com/c840635/v840635319/62afc/qZrt558D3lY.jpg",
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
        hashtags: ["#охота", "#природа", "#друзья", "#friends"],
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
        createdAt: new Date("2016-05-12T17:13"),
        author: "Юрий Хованский",
        photoLink: "http://www.pravilnoe-pokhudenie.ru/recepty/vkusnaia-sochnaia-shaurma-s-kuricei-1.jpg",
        hashtags: ["#шаверма", "#еда", "#богов", "#love"],
        likes: ["Kuzmik.A", "SpongeBob", "Никола Тесла", "Tesak", "Songsterr2001", "Till Lindemann", "wolf2005"]
    }
    ,
    {
        id: "14",
        description: "Сегодня с ребятами играли футбол. Жаль, что проиграли!",
        createdAt: new Date("2016-05-12T17:12"),
        author: "СборнаяРоссииОфишл",
        photoLink: "http://www.interfax.ru/ftproot/textphotos/2017/10/13/ftb700.jpg",
        hashtags: ["#футбол", "#спорт", "#friends", "#love"],
        likes: ["СборнаяРоссииОфишл"]
    }
    ,
    {
        id: "15",
        description: "Великий русский народ смотрит на меня, а я и рад",
        createdAt: new Date("2015-12-12T17:11"),
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
        author: "Коля",
        photoLink: "https://nn.by/img/w652d4/photos/z_2017_01/vosiera-7q00p.jpg",
        hashtags: ["#love", "#всемПо500", "#свой"],
        likes: ["ЛучшыйБацька"]
    }
    ,
    {
        id: "17",
        description: "Кто тут такая красивая и самая лучшая на свете собачка?",
        createdAt: new Date("2016-05-12T17:29"),
        author: "Aggressive_elf",
        photoLink: "https://pp.userapi.com/c633921/v633921885/521d/WGTQi6fBm6s.jpg",
        hashtags: ["#love", "#cute", "#friends", "#dog"],
        likes: ["Kuzmik.A", "SpongeBob", "Никола Тесла", "Steve Irwin", "Songsterr2001", "Till Lindemann",
            "wolf2005", "rabbit3432", "Putin", "Коленька"]
    }
    ,
    {
        id: "18",
        description: "Делаю вручную 18-ый элемент массива. А на фотке снова милое животное.",
        createdAt: new Date("2018-03-05T17:14"),
        author: "Kuzmik.A",
        photoLink: "http://profermu.com/wp-content/uploads/2016/09/532425.jpg",
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
        photoLink: "https://cdn1.img.ria.ru/images/151254/95/1512549537.jpg",
        hashtags: ["#communism", "#коммунизм", "#выборы", "#крымнаш"],
        likes: ["Kremlebot2251","Kremlebot2252","Kremlebot2253","Kremlebot2151","Kremlebot0051","Kremlebot2080" ]
    }
];

let photoPosts = [];


var modulePhotoPosts = function() {





     function getPhotoPosts(skip, top, filterConfig) {
      if(skip===undefined)
        skip = 0;
      if(top===undefined)
        top = 10;
      if(filterConfig===undefined)
        filterConfig = {};
      let buffPhotoPosts = [];
      buffPhotoPosts = photoPosts.slice(0,photoPosts.length);
      if(filterConfig!==undefined) {
          if ("author" in filterConfig)
              filterByAuthor(buffPhotoPosts, filterConfig.author);
          if ("dateSince" in filterConfig)
              filterByDateSince(buffPhotoPosts, filterConfig.dateSince);
          if ("dateFor" in filterConfig)
              filterByDateFor(buffPhotoPosts, filterConfig.dateFor);
          if("hashtags" in filterConfig)
              filterByHashtags(buffPhotoPosts, filterConfig.hashtags);
      }
      if(skip > buffPhotoPosts.length)
        return null;
      if(top > buffPhotoPosts.length)
        top = buffPhotoPosts.length;
      sortByDate(buffPhotoPosts);
      return buffPhotoPosts.slice(skip,top);
  }
  
  function filterByAuthor(array, value) {
      for(let i = 0 ; i < array.length; i++)
          if(array[i].author!==value) {
              array.splice(i, 1);
              i--;
          }
  }

  function filterByHashtags(array, value){
        for(let i = 0; i < value.length; i++) {
            for(let j = 0; j < array.length; j++)
                if(array[j].hashtags.indexOf(value[i])===-1)
                {
                    array.splice(j,1);
                    j--;
                }
        }
  }

  function filterByDateSince(array, dateSince) {
      for(let i = 0 ; i < array.length; i++)
          if(!(array[i].createdAt > dateSince)) {
              array.splice(i, 1);
              i--;
          }
  }

    function filterByDateFor(array, dateFor) {
        for(let i = 0 ; i < array.length; i++)
            if(!(array[i].createdAt < dateFor)) {
                array.splice(i, 1);
                i--;
            }
    }

  function sortByDate(array) {
      array.sort(function (a,b){
        return b.createdAt - a.createdAt;
      } )
  }

  function getPhotoPost(id){
      if(id === undefined)
        return null;
      for(let i = 0; i < photoPosts.length; i++){
        if(photoPosts[i].id === id)
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
      if(!"author" in photoPost || photoPost.author.length === 0)
          return false;
      if(!"photoLink" in photoPost || photoPost.photoLink.length === 0)
          return false;

      if(!"hashtags" in photoPost || !validateHashtags(photoPost.hashtags))
          return false;
      if(!"likes" in photoPost)
          return false;

      return true;
  }

  function validateHashtags(array) {
      for(let i = 0 ; i < array.length; i++)
      {
          if(array[i].charAt(0)!=='#')
              return false;
          for(let j = 1 ; j < array[i].length; j++)
              var ch = array[i].charAt(j)
              if(ch === ' ' || ch === '.' || ch === ',')
                  return false;
      }
      return true;
  }

  function addPhotoPost(photoPost){
      if(validatePhotoPost(photoPost) && getPhotoPost(photoPost.id) === null) {
          photoPosts.push(photoPost);
          return true;
      }
      return false;
  }

  function editPhotoPost(id, photoPost) {
      if (getPhotoPost(id) === null)
          return false;
      let buffer = getPhotoPost(id);
      let description_backup = buffer.description;
      let photoLink_backup = buffer.photoLink;
      let hashtags_backup = buffer.hashtags;
      if ("description" in photoPost){
        buffer.description = photoPost.description;
      }
      if("photoLink" in photoPost) {
        buffer.photoLink = photoPost.photoLink;
      }
      if("hashtags" in photoPost)
          buffer.hashtags = photoPost.hashtags.slice(0,photoPost.hashtags.length);
      if(!validatePhotoPost(buffer)){
        buffer.description = description_backup;
        buffer.photoLink = photoLink_backup;
        buffer.hashtags = hashtags_backup;
        return false;
      }
      return true;
  }

  function removePhotoPost(id) {
      for(let i = 0 ; i < photoPosts.length; i++)
        if(photoPosts[i].id === id) {
            photoPosts.splice(i, 1);
            return true;
        }
      return false;
  }

  return {
      getPhotoPost: getPhotoPost,
      getPhotoPosts: getPhotoPosts,
      addPhotoPost: addPhotoPost,
      editPhotoPost: editPhotoPost,
      removePhotoPost: removePhotoPost
  }

}();
