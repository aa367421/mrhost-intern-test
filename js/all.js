const dataRaw = [
    {
      "index": "0",
      "name": "洛碁大飯店三貝茲",
      "star": "3.5",
      "img": "./img/0_triplebeds.jpg",
      "position": "台北市",
      "description": "三貝茲飯店距離捷運國父紀念館站步行 10 分鐘，提供附免費 WiFi 和平面電視的典雅客房。飯店設有健身房和免費停車場。此飯店於 2018 年重新裝修。三貝茲飯店距離台灣桃園國際機場 1 小時車程。要前往附近其他景點皆很方便，包括台北 101、饒河街夜市和信義商業區。客房擁有舒適柔和的色調、寬敞的佈局和休息區，並設有空調。私人衛浴內配有浴缸和盥洗用品。",
      "rate": "4.7",
      "price": "3800",
      "facility": {
        "wifi": true,
        "noSmoking": true,
        "kitchen": false,
        "laundryRoom": false,
        "park": true,
        "petFriendly": false
      }
    },
    {
      "index": "1",
      "name": "路徒行旅-中華館",
      "star": "3",
      "img": "./img/1_roaders.jpg",
      "position": "台北市",
      "description": "路徒行旅位於台北，距離西門町購物商圈僅 400 公尺，提供時尚且寬敞的客房。住客可享全館免費 WiFi。飯店距離捷運西門站步行 6 分鐘。從台北車站搭乘捷運前往飯店僅需 1 站，十分方便。飯店距離台北松山機場 30 分鐘車程，距離台灣桃園國際機場 50 分鐘車程。每間客房均設有空調、平面有線電視、電熱水壺和冰箱。",
      "rate": "4.4",
      "price": "2300",
      "facility": {
        "wifi": true,
        "noSmoking": true,
        "kitchen": true,
        "laundryRoom": true,
        "park": false,
        "petFriendly": false
      }
    },
    {
      "index": "2",
      "name": "新光新板傑仕堡",
      "star": "3",
      "img": "./img/2_jaspervilla.jpg",
      "position": "新北市",
      "description": "新光新板傑仕堡位在台北，距離南雅夜市 2.3 公里，有餐廳、免費私人停車位和酒吧。這間住宿提供的設施與服務包括 24 小時接待櫃檯、ATM 自動櫃員機以及全館 WiFi（免費）。住客可以欣賞市景。新光新板傑仕堡為住客提供空調客房。所有房型均有書桌、電熱水壺、冰箱、保險箱、平面電視以及附沖洗座的私人衛浴。這間住宿的每間客房都有寢具和毛巾。新光新板傑仕堡的住客可以享用單點式或美式早餐。",
      "rate": "4.6",
      "price": "2027",
      "facility": {
        "wifi": true,
        "noSmoking": true,
        "kitchen": true,
        "laundryRoom": true,
        "park": true,
        "petFriendly": false
      }
    },
    {
      "index": "3",
      "name": "OwlStay 故事所 夾腳拖的家花園",
      "star": "2",
      "img": "./img/3_owlstay.jpg",
      "position": "台北市",
      "description": "「夾腳拖的家」從2010年誕生至今，一直以來想做的不只是一間旅館，而是跳脫旅宿的定義與框架，把空間作為一個能凝聚各種旅人與文化的容器，與旅人共同創作，以此激盪出更多故事，讓這段獨特的旅宿體驗，能儲存於旅人的腦袋裡，永久保存。也因為我們想做的事很不一樣，所以需要不只是把工作當成工作的你，而是想一起在空間內共同創造與旅人對話的可能性。",
      "rate": "4.3",
      "price": "2951",
      "facility": {
        "wifi": true,
        "noSmoking": true,
        "kitchen": true,
        "laundryRoom": false,
        "park": false,
        "petFriendly": false
      }
    },
    {
      "index": "4",
      "name": "金普頓大安台北-洲際酒店集團酒店",
      "star": "5",
      "img": "./img/4_kimpton.jpg",
      "position": "台北市",
      "description": "金普頓大安台北－洲際酒店集團酒店位於台北市大安區，提供 5 星級客房以及免費 WiFi。這家 5 星級飯店設有 24 小時接待櫃台和健身中心，並提供禮賓服務。住宿方會規劃自行車或徒步行程，讓您探索當地街區。此住宿距離遼寧夜市和台北小巨蛋 1.7 公里。最近的機場是台北松山機場，距離住宿 3.7 公里。此飯店的所有客房均提供平面衛星電視。每間客房都設有咖啡機和私人衛浴，部分客房設有陽台。金普頓大安台北－洲際酒店集團酒店的客房提供空調和衣櫃。",
      "rate": "4.8",
      "price": "5962",
      "facility": {
        "wifi": true,
        "noSmoking": true,
        "kitchen": true,
        "laundryRoom": false,
        "park": false,
        "petFriendly": true
      }
    },
  ];

dataRaw.forEach(item => {
    let rawLength = item.description.length;
    if (window.innerWidth > 1400){
        return;
    } else if (window.innerWidth <= 1400 && window.innerWidth > 576){
        item.description = item.description.slice(0, rawLength / 1.5) + '……';
    } else if (window.innerWidth <= 576 && window.innerWidth > 460){
        item.description = item.description.slice(0, rawLength / 2) + '……';
    } else {
        item.description = item.description.slice(0, rawLength / 3) + '……';
    }
})
  
let dataView = [...dataRaw]
  
const vm = Vue.createApp({
    data(){
        return {
            data: dataView,
            facilityDropdownStatus: true,
            checkboxStatus: [],
            sortStatus: "default"
        }
    },
    methods: {
        updateFacilityDropdownStatus(){
            this.facilityDropdownStatus = !this.facilityDropdownStatus;
        },
        checkRate(rate) {
            if( rate >= 4.5 ){
                return "好極了"
            } else if (rate < 4.5 && rate >= 4.0){
                return "非常好"
            } else {
                return "還不錯"
            }
        },
        plusComma(price){
            return Number(price).toLocaleString();
        },
        updateSortStatus(e){
            let sortMethod = ["default", "toHigh", "toLow", "ByStar"]
            let val = e.target.value;
            this.sortStatus = sortMethod[val];
        },
        sortChange(){
            let currentSort = this.sortStatus;
            if (currentSort == "default"){
                this.data.sort((a,b) => {
                    return a.index - b.index;
                })
            } else if (this.sortStatus == "toHigh"){
                this.data.sort((a,b) => {
                    return a.price - b.price;
                })
            } else if (this.sortStatus == "toLow"){
                this.data.sort((a,b) => {
                    return b.price - a.price;
                })
            } else {
                this.data.sort((a,b) => {
                    return b.star - a.star;
                })
            }
        },
        sideMenuFilter(){
            this.data = [...dataRaw];
            this.checkboxStatus.forEach(checked => {
                this.data = this.data.filter(item => item.facility[checked] == true);
            })
            this.$options.methods.sortChange.bind(this)();
        }
    }
}).mount('#app');

const sideMenuChevron = document.querySelector('.lg-side-menu-chevon');
const sideMenu = document.querySelector('.side-menu');
sideMenuChevron.addEventListener('click', () =>{
    sideMenuChevron.classList.toggle('active');
    sideMenu.classList.toggle('active');
})
