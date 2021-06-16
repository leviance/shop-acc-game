<template>
  <div class="list-accounts">
    <div class="wrap-list-accounts">
      <div class="title"><strong>acc liên minh tự chọn</strong></div>
      <div class="filter-block">
        <div class="filter-option">
          <div class="type-filter"><span>Mã số</span></div>
          <input type="text" />
        </div>
        <div class="filter-option">
          <div class="type-filter"><span>Giá từ</span></div>
          <select name="price-from" id="price-from">
            <option>Chọn giá</option>
            <option value="10000">10.000 VNĐ</option>
            <option value="20000">20.000 VNĐ</option>
            <option value="30000">30.000 VNĐ</option>
            <option value="50000">50.000 VNĐ</option>
            <option value="100000">100.000 VNĐ</option>
            <option value="200000">200.000 VNĐ</option>
            <option value="300000">300.000 VNĐ</option>
            <option value="500000">500.000 VNĐ</option>
            <option value="1000000">1.000.000 VNĐ</option>
          </select>
        </div>
        <div class="filter-option">
          <div class="type-filter"><span>Đến giá</span></div>
          <select name="price-to" id="price-to">
            <option>Chọn giá</option>
            <option value="10000">10.000 VNĐ</option>
            <option value="20000">20.000 VNĐ</option>
            <option value="30000">30.000 VNĐ</option>
            <option value="50000">50.000 VNĐ</option>
            <option value="100000">100.000 VNĐ</option>
            <option value="200000">200.000 VNĐ</option>
            <option value="300000">300.000 VNĐ</option>
            <option value="500000">500.000 VNĐ</option>
            <option value="1000000">1.000.000 VNĐ</option>
          </select>
        </div>
        <div class="filter-option">
          <select name="find-champ-name" id="find-champ-name">
            <option>Tìm tên tướng</option>
            <option v-for="(champion, index) in listChampions" :key="index">
              {{ champion }}
            </option>
          </select>
        </div>
        <div class="filter-option">
          <select name="find-champ-name" id="find-champ-skin">
            <option>Tìm tên trang phục</option>
            <option v-for="(skin, index) in listSkins" :key="index">
              {{ skin }}
            </option>
          </select>
        </div>
        <div class="filter-option list-btn-action">
          <div class="btn-search"><b>Tìm kiếm</b></div>
          <div class="btn-view-all"><b>Tất cả</b></div>
        </div>
      </div>
      <div class="list-account">
        <router-link
          :to="{
            name: 'DetailAccountPage',
            params: { accountID: data.accountID },
          }"
          class="account-block"
          v-for="(data, index) in testData"
          :key="index"
        >
          <div class="wrap-account-block">
            <div class="account-id">{{ data.accountID }}</div>
            <img
              class="account-image"
              :src="require(`@/assets/images/account-img/${data.img}`)"
              :alt="data.name"
            />
            <div class="account-infor">
              <div>
                <p>Tướng: <b>122</b></p>
              </div>
              <div>
                <p>Trang phục: <b>67</b></p>
              </div>
              <div>
                <p>Rank: <b>Không</b></p>
              </div>
              <div>
                <p>Thông tin: <b>SĐT đổi</b></p>
              </div>
            </div>
            <div class="list-btn">
              <div class="btn-price">310,000 đ</div>
              <div class="btn-detail"><strong>CHI TIẾT</strong></div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="paging">
        <div class="wrap-paging">
          <div class="btn-pre-page">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div class="btn-num-page active">1</div>
          <div class="btn-num-page">2</div>
          <div class="btn-num-page">3</div>
          <div class="btn-num-page">8</div>
          <div class="btn-next-page">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathName: "",
      testData: [
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc liên minh tự chọn",
          numAcc: "3,900",
          accountID: "115758",
          price: null,
        },
        {
          img: "image-a8c9477d-57e1-4ee7-8f57-87c1ceee7c5a.jpeg",
          name: "acc liên minh siêu rẻ",
          numAcc: "3,900",
          accountID: "115758",
          price: null,
        },
        {
          img: "image-35839b98-3a87-4420-9e09-7c88efbf2404.jpeg",
          name: "acc liên minh vip",
          numAcc: "3,900",
          accountID: "115758",
          price: null,
        },
        {
          img: "image-0de2949a-3387-41e1-afb7-8bfe9e39ae02.jpeg",
          name: "acc chưa rank mùa nào",
          numAcc: "3,900",
          accountID: "115758",
          price: null,
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random 10k",
          numAcc: "3,900",
          accountID: "115758",
          price: "10.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 1",
          numAcc: "3,900",
          accountID: "115758",
          price: "25.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 2",
          numAcc: "3,900",
          accountID: "115758",
          price: "50.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 3",
          numAcc: "3,900",
          accountID: "115758",
          price: "100.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 4",
          numAcc: "3,900",
          accountID: "115758",
          price: "150.000đ",
        },
        {
          img: "image-43aeb843-f151-4c2e-8912-e468f9dbaabf.jpeg",
          name: "acc random cấp 5",
          numAcc: "3,900",
          accountID: "115758",
          price: "250.000đ",
        },
      ],
      listChampions: [
        "Aatrox",
        "Ahri",
        "Akali",
        "Alistar",
        "Amumu",
        "Anivia",
        "Annie",
        "Aphelios",
        "Ashe",
        "AurelionSol",
        "Azir",
        "Bard",
        "Blitzcrank",
        "Brand",
        "Braum",
        "Caitlyn",
        "Camille",
        "Cassiopeia",
        "ChoGath",
        "Corki",
        "Darius",
        "Diana",
        "Draven",
        "DrMundo",
        "Ekko",
        "Elise",
        "Evelynn",
        "Ezreal",
        "Fiddlesticks",
        "Fiora",
        "Fizz",
        "Galio",
        "Gangplank",
        "Garen",
        "Gnar",
        "Gragas",
        "Graves",
        "Hecarim",
        "Heimerdinger",
        "Hello",
        "Illaoi",
        "Invern",
        "Irelia",
        "Ivern",
        "Janna",
        "Jarvan IV",
        "JarvanIV",
        "Jax",
        "Jayce",
        "Jhin",
        "Jinx",
        "KaiSa",
        "Kalista",
        "Karma",
        "Karthus",
        "Kassadin",
        "Katarina",
        "Kayle",
        "Kayn",
        "Kennen",
        "KhaZix",
        "Kindred",
        "Kled",
        "KogMaw",
        "LeBlanc",
        "LeeSin",
        "Leona",
        "Lissandra",
        "Lucian",
        "Lulu",
        "Lux",
        "Malphite",
        "Malzahar",
        "Maokai",
        "MasterYi",
        "MissFortune",
        "MonkeyKing",
        "Mordekaiser",
        "Morgana",
        "Nami",
        "Nasus",
        "Nautilus",
        "Neeko",
        "Nidalee",
        "Nocturne",
        "Nunu & Willump",
        "Nunu",
        "Olaf",
        "Orianna",
        "Ornn",
        "Pantheon",
        "Poppy",
        "Pyke",
        "Qiyana",
        "Quinn",
        "Rakan",
        "Rammus",
        "RekSai",
        "Renekton",
        "Rengar",
        "Riven",
        "Rumble",
        "Ryze",
        "Sejuani",
        "Senna",
        "Shaco",
        "Shen",
        "Shyvana",
        "Singed",
        "Sion",
        "Sivir",
        "Skarner",
        "Sona",
        "Soraka",
        "Swain",
        "Sylas",
        "Syndra",
        "TahmKench",
        "Taliyah",
        "Talon",
        "Taric",
        "Teemo",
        "Thresh",
        "Tristana",
        "Trundle",
        "Tryndamere",
        "TwistedFate",
        "Twitch",
        "Udyr",
        "Urgot",
        "Varus",
        "Vayne",
        "Veigar",
        "VelKoz",
        "Vi",
        "Viktor",
        "Vladimir",
        "Volibear",
        "Warwick",
        "Xayah",
        "Xerath",
        "XinZhao",
        "Yasuo",
        "Yorick",
        "Yuumi",
        "Zac",
        "Zed",
        "Ziggs",
        "Zilean",
        "Zoe",
        "Zyra",
      ],
      listSkins: [
        "Annie Kinh Dị",
        "Annie Gô-tích",
        "Annie Quàng Khăn Đỏ",
        "Annie ở Xứ Thần Tiên",
        "Annie Hoa Hậu",
        "Annie Lửa Băng",
        "Annie Nghịch Đảo",
        "Annie Kinh Dị",
        "Annie Gấu Trúc",
        "Annie Gấu Bé Bỏng",
        "Annie Công Nghệ",
        "Annie Siêu Nhân Thiên Hà",
        "Annie Sinh Nhật",
        "Olaf Kẻ Phản Diện",
        "Olaf Băng Giá",
        "Brolaf",
        "Pentakill Olaf",
        "Olaf Toán Cướp Hắc Ám",
        "Olaf Thái Thịt",
        "Brolaf Đa Sắc",
        "Brolaf Đa Sắc",
        "Brolaf Đa Sắc",
        "Brolaf Đa Sắc",
        "Brolaf Đa Sắc",
        "Brolaf Đa Sắc",
        "Brolaf Đa Sắc",
        "Brolaf Đa Sắc",
        "SKT T1 Olaf",
        "Galio Ma Pháp",
        "Galio Công Nghệ",
        "Galio Biệt Kích",
        "Galio Địa Ngục",
        "Galio Thanh Lịch",
        "Gà-lio",
        "Galio Hỏa Ngục",
        "PAX Twisted Fate",
        "Twisted Fate Bồi cơ",
        "Twisted Fate Ảo Thuật Sư",
        "Twisted Fate Tango",
        "Twisted Fate Cao Bồi",
        "Twisted Fate Ngự Lâm Quân",
        "Twisted Fate Âm Phủ",
        "Twisted Fate Trọng Tài",
        "Twisted Fate Thời Niên Thiếu",
        "Twisted Fate Huyết Nguyệt",
        "Twisted Fate Vũ Khí Tối Thượng",
        "Xin Zhao Biệt Kích",
        "Xin Zhao Hoàng Gia",
        "Xin Zhao Giác Đấu",
        "Xin Zhao Chiến Thần",
        "Xin Zhao Triệu Tử Long",
        "Xin Zhao Mật Vụ",
        "Xin Zhao Triệu Tử Long Đa Sắc",
        "Xin Zhao Đồ Long",
        "Xin Zhao Hộ Vệ Vũ Trụ",
        "Urgot Cua Khổng Lồ",
        "Urgot Đồ Tể",
        "Urgot Cỗ Máy Chiến Đấu",
        "Urgot Cỗ Máy Chiến Đấu Đa Sắc",
        "Urgot Cao Bồi",
        "LeBlanc Độc Ác",
        "LeBlanc Ảo Thuật",
        "LeBlanc Tầm Gửi",
        "LeBlanc Nàng Quạ Đen",
        "LeBlanc Thần Rừng",
        "LeBlanc Siêu Máy Tính",
        "iG LeBlanc",
        "Bá Tước Vladimir",
        "Hầu Tước Vladimir",
        "Vladimir Ma Cà Rồng",
        "Vladimir Du Côn",
        "Chúa Tể Vladimir",
        "Vladimir Đoạt Hồn",
        "Vladimir Hội Trưởng Học Sinh",
        "Vladimir Hắc Thủy",
        "Vladimir Ma Sứ",
        "Fiddlesticks Bóng Ma",
        "Fiddlesticks Anh Quốc",
        "Fiddlesticks Tướng Cướp",
        "Fiddlesticks Bí Ngô",
        "Fiddlesticks Cướp Biển",
        "Fiddlesticks Tiệc Bất Ngờ",
        "Fiddlesticks Cây Kẹo Dễ Sợ",
        "Fiddlesticks Tà Thần Tái Thế",
        "Fiddlesticks Cận Vệ Thép",
        "Kayle Bạc",
        "Kayle Lục Bảo",
        "Kayle Siêu Phàm",
        "Kayle Chiến Thần",
        "Kayle Phán Quyết",
        "Kayle Thiên Sứ Công Nghệ",
        "Riot Kayle",
        "Kayle Thiết Phán Quan",
        "Pentakill Kayle",
        "Master Yi Sát Thủ",
        "Master Yi Người Được Chọn",
        "Master Yi Xứ Ionia",
        "Samurai Yi",
        "Master Yi Thợ Săn ",
        "SIÊU PHẨM: Yi",
        "Master Yi Kiếm Sĩ Vũ Trụ",
        "Master Yi Thiên Kiếm",
        "Master Yi Thiên Kiếm Đa Sắc",
        "Master Yi Thiên Kiếm Đa Sắc",
        "Master Yi Thiên Kiếm Đa Sắc",
        "Master Yi Thiên Kiếm Đa Sắc",
        "Master Yi Thiên Kiếm Đa Sắc",
        "Yi Người Tuyết",
        "Alistar Đen",
        "Alistar Vàng",
        "Alistar Đấu Sĩ",
        "Alistar Cao Bồi",
        "Alistar Ngưu Ma Vương",
        "Alistar Địa Ngục",
        "Alistar Hậu Vệ",
        "Alistar Toán Cướp Hắc Ám",
        "SKT T1 Alistar",
        "Alistar Bò Sữa",
        "Alistar Bò Sữa Đa Sắc",
        "Alistar Bò Sữa Đa Sắc",
        "Alistar Bò Sữa Đa Sắc",
        "Alistar Công Nghệ",
        "Alistar Chinh Phục",
        "Ryze Niên Thiếu",
        "Ryze Thầy Mo",
        "Chú Ryze",
        "Ryze Vinh Quang",
        "Giáo Sư Ryze",
        "Ryze Xác Sống",
        "Ryze Pha Lê Đen",
        "Ryze Hải Tặc",
        "Ryze Pháp Sư Râu Trắng",
        "SKT T1 Ryze",
        "Ryze Quán Quân",
        "Sion Công Nghệ",
        "Sion Man Di",
        "Sion Tiều Phu",
        "Sion Chiến Thần",
        "Sion Người Máy Biến Hình",
        "Sivir Công Chúa Chiến Binh",
        "Spectacular Sivir",
        "Sivir Thợ Săn",
        "Sivir Tướng Cướp",
        "PAX Sivir",
        "Sivir Bão Tuyết",
        "Sivir Tổ Đội Quản Ngục",
        "Sivir Vinh Quang",
        "Neo PAX Sivir",
        "Sivir Pizza",
        "Sivir Huyết Nguyệt",
        "Soraka Rừng Xanh",
        "Soraka Khuê Nữ",
        "Soraka Thánh Nữ",
        "Soraka Tử Thần",
        "Soraka Hội Chuối Cả Nải",
        "Soraka Siêu Máy Tính",
        "Soraka Vệ Binh Tinh Tú",
        "Soraka Vệ Binh Pyjama",
        "Soraka Mùa Đông Kỳ Diệu",
        "Soraka Thần Sứ",
        "Soraka Ma Sứ",
        "Teemo Yêu Tinh Giáng Sinh",
        "Teemo Tình Báo",
        "Teemo Hướng Đạo Sinh",
        "Teemo Phi Hành Gia",
        "Teemo Thỏ Phục Sinh",
        "Siêu Nhân Teemo",
        "Teemo Gấu Trúc",
        "Teemo Biệt Đội Omega",
        "Teemo Thỏ Phục Sinh Đa Sắc",
        "Teemo Thỏ Phục Sinh Đa Sắc",
        "Teemo Thỏ Phục Sinh Đa Sắc",
        "Teemo Thỏ Phục Sinh Đa Sắc",
        "Teemo Thỏ Phục Sinh Đa Sắc",
        "Teemo Tiểu Quỷ",
        "Beemo",
        "Riot Girl Tristana",
        "Tristana Yêu Tinh Giáng Sinh",
        "Tristana Lính Cứu Hỏa",
        "Tristana Du Kich",
        "Tristana Cướp Biển",
        "Tristana Hỏa Tiễn",
        "Tristana Luyện Rồng",
        "Tristana Phù Thủy",
        "Tristana Biệt Đội Omega",
        "Tristana Biệt Đội Omega Đa Sắc",
        "Tristana Biệt Đội Omega Đa Sắc",
        "Tristana Biệt Đội Omega Đa Sắc",
        "Tristana Biệt Đội Omega Đa Sắc",
        "Tristana Biệt Đội Omega Đa Sắc",
        "Tristana Tiểu Quỷ",
        "Warwick Xám",
        "Warwick Con Heo Biển",
        "Warwick Bà Ngoại",
        "Warwick Sói Lãnh Nguyên",
        "Warwick Sói Điên",
        "Warwick Nanh Lửa",
        "Warwick Linh Cẩu",
        "Warwick Toán Cướp Hắc Ám",
        "Warwick Urf",
        "Warwick Mậu Tuất",
        "Warwick Mậu Tuất Đa Sắc",
        "Warwick Mậu Tuất Đa Sắc",
        "Warwick Mậu Tuất Đa Sắc",
        "Warwick Mậu Tuất Đa Sắc",
        "SIÊU PHẨM: Warwick",
        "Nunu & Willump Khỉ Đột",
        "Nunu & Willump Công Xưởng",
        "Nunu & Willump Mẫu Giáo",
        "Nunu & Willump Máy",
        "Nunu & Willump Hủy Diệt",
        "TPA Nunu & Willump",
        "Nunu & Willump Thây Ma",
        "Nunu & Willump Hiệp Sĩ Giấy",
        "Miss Fortune Nữ Cao Bồi",
        "Miss Fortune Waterloo",
        "Miss Fortune Mật Vụ",
        "Miss Fortune Kẹo Ngọt",
        "Miss Fortune Đường Phố",
        "Miss Fortune Thế Giới Ngầm",
        "Miss Fortune Giả Lập",
        "Miss Fortune Thuyền Trưởng",
        "Miss Fortune Tiệc Bể Bơi",
        "Miss Fortune Vệ Binh Tinh Tú",
        "Miss Fortune Nữ Thần Không Gian",
        "Miss Fortune Vệ Binh Pyjama",
        "Miss Fortune Phù Thủy",
        "Miss Fortune Phù Thủy - Hàng Hiệu",
        "Ashe Freljord",
        "Ashe Rừng Xanh",
        "Ashe Hoang Dã",
        "Ashe Nữ Hoàng",
        "Ashe Thạch Anh",
        "Ashe Mũi Tên Tình Ái",
        "Ashe Toán Cướp Hắc Ám",
        "SIÊU PHẨM: Ashe",
        "Ashe Quán Quân",
        "Ashe Quán Quân Đa Sắc",
        "Ashe Nữ Hoàng Vũ Trụ",
        "Ashe Cao Bồi",
        "Tryndamere Sơn Cước",
        "Tryndamere Quốc Vương",
        "Tryndamere Viking",
        "Tryndamere Quỷ Kiếm",
        "Tryndamere Thổ Nhĩ Kỳ",
        "Tryndamere Quan Vũ",
        "Tryndamere Ác Mộng",
        "Tryndamere Thợ Săn Quái Thú",
        "Tryndamere Vũ Khí Hóa Học",
        "Jax Khúc Côn Cầu",
        "Jax Du Côn",
        "Jax Ngư Ông",
        "PAX Jax",
        "Jax Giác Đấu",
        "Jax Giữ Đền",
        "Jax Phục Hận",
        "SKT T1 Jax",
        "Jax Tổ Đội Quản Ngục",
        "Jax Thần Trượng",
        "Morgana Lưu Đày",
        "Morgana Nướng Bánh",
        "Morgana Người Máy",
        "Morgana Gai Đen",
        "Morgana Oan Hồn Cô Dâu",
        "Morgana Vinh Quang",
        "Morgana Nguyệt Hồn",
        "Morgana Phù Thủy",
        "Morgana Khổng Tước Hoàng Hậu",
        "Ông Già Zilean",
        "Zilean Bay Bổng",
        "Zilean Hoang Mạc Shurima",
        "Zilean Du Hành Thời Gian",
        "Zilean Huyết Nguyệt",
        "Zilean Bánh Ngọt",
        "Riot Squad Singed",
        "Singed Công Nghệ",
        "Singed Cưỡi Sóng",
        "Singed Bác Học Điên",
        "Singed Cường Hóa",
        "Singed Ngày Tuyết Rơi",
        "SSW Singed",
        "Singed Tai Họa",
        "Singed Ong Mật",
        "Evelynn Bóng Tối",
        "Evelynn Dạ Vũ",
        "Evelynn Tango",
        "Evelynn Cạy Két",
        "Evelynn Huyết Nguyệt",
        "K/DA Evelynn",
        "K/DA Evelynn - Hàng Hiệu",
        "Evelynn Bánh Ngọt",
        "Twitch Chuột Chù",
        "Twitch Trượt Tuyết",
        "Twitch Trung Cổ",
        "Twitch Thế Giới Ngầm",
        "Twitch Du Côn",
        "Twitch Móc Túi",
        "SSW Twitch",
        "Twitch Biệt Đội Omega",
        "Twitch Vua Xứ Tuyết",
        "Karthus Bóng Ma",
        "Karthus Tự Do",
        "Thần Chết Karthus",
        "Pentakill Karthus",
        "Fnatic Karthus",
        "Karthus Hoàng Tử Tai Ương",
        "Cho'Gath Ác Mộng",
        "Quý Ông Cho'Gath",
        "Cho'Gath Hồ Lốc-nét",
        "Cho'Gath Hóa Thạch",
        "Cho'Gath Cỗ Máy Hủy Diệt",
        "Cho'Gath Thời Tiền Sử",
        "Cho'Gath Hắc Tinh",
        "Amumu Pha-ra-ông",
        "Amumu Vancouver",
        "Amumu Tự Kỉ",
        "Amumu Quà-trả-lại",
        "Amumu Suýt Hoa Vương ",
        "Amumu Hiệp Sĩ",
        "Amumu Người Máy U Sầu",
        "Amumu Tiệc Bất Ngờ",
        "Amumu Hỏa Ngục",
        "Amumu Công Nghệ",
        "Vua Rammus",
        "Rammus Nhôm",
        "Rammus Nham Thạch",
        "Rammus Freljord ",
        "Ninja Rammus",
        "Rammus Giả Kim",
        "Rammus Vệ Binh Sa Mạc",
        "Rammus Hậu Vệ",
        "Rammus Công Nghệ",
        "Anivia Đoàn Kết",
        "Anivia Diều Hâu",
        "Anivia Thợ Săn Noxus",
        "Anivia Công Nghệ",
        "Anivia Sương Đen",
        "Anivia Thời Tiền Sử",
        "Anivia Nữ Hoàng Lễ Hội",
        "Anivia Tiên Hạc Giấy",
        "Shaco Ở Xứ Thần Tiên",
        "Shaco Hoàng Gia",
        "Shaco Lính Chì",
        "Shaco Công Xưởng",
        "Shaco Tâm Thần",
        "Shaco Mặt Nạ",
        "Shaco Quân Bài Bí Ẩn",
        "Shaco Hắc Tinh",
        "Dr. Mundo Độc Dược",
        "MunĐÔ",
        "Mundo Giám Đốc",
        "Mundo Mundo",
        "Mundo Đao Phủ",
        "Mundo Cuồng Loạn",
        "TPA Mundo",
        "Mundo Tiệc Bể Bơi",
        "Mun Đô Vật",
        "Mundo Hoàng Tử Đóng Băng",
        "Sona Tiên Nữ",
        "Pentakill Sona",
        "Sona Đêm An Lành",
        "Sona Cổ Cầm",
        "Sona Giả Lập",
        "DJ Sona",
        "Sona Tiểu Tình Nhân",
        "Sona Tiên Tri Không Gian",
        "Kassadin Lễ Hội",
        "Kassadin Biển Sâu",
        "Kassadin Ngày Xưa",
        "Kassadin Sứ Giả",
        "Kassadin Đạo Tặc Vũ Trụ",
        "Bá Tước Kassadin",
        "Irelia Sát Thủ",
        "Irelia Phi Công",
        "Irelia Gián Điệp",
        "Irelia Băng Kiếm",
        "Irelia Hội Sen Hồng",
        "Irelia Thánh Kiếm",
        "iG Irelia",
        "SIÊU PHẨM: Irelia",
        "SIÊU PHẨM: Irelia - Hàng Hiệu",
        "Janna Giông Tố",
        "Janna Công Nghệ",
        "Janna Chúa Tuyết",
        "Janna Vinh Quang",
        "Janna Dự Báo Thời Tiết",
        "Fnatic Janna",
        "Janna Vệ Binh Tinh Tú",
        "Janna Tiên Kiếm",
        "Janna Tiên Kiếm Đa Sắc",
        "Janna Tiên Kiếm Đa Sắc",
        "Janna Phù Thủy",
        "Hồn Ma Gangplank",
        "Gangplank Lão Tướng",
        "Gangplank Thủy Thủ",
        "Gangplank Lính Chì",
        "Gangplank Đặc Nhiệm",
        "Gangplank Ba Tư Đại Đế",
        "Gangplank Thuyền Trưởng",
        "Gangplank Hiểm Họa Không Gian",
        "Gangplank Tiệc Bể Bơi",
        "Corki Đĩa Bay",
        "Corki Xe Trượt Băng",
        "Corki Nam Tước Đỏ",
        "Corki Tay Chơi",
        "Corki Cưỡi Urf",
        "Corki Long Chiến Cơ",
        "Fnatic Corki",
        "Corki Giả Lập",
        "Corki Giả Lập Đa Sắc",
        "Corki Giả Lập Đa Sắc",
        "Corki Giả Lập Đa Sắc",
        "Corki Giả Lập Đa Sắc",
        "CorGi Siêu Vòng Ba",
        "Karma Nữ Thần Mặt Trời",
        "Karma Hoa Anh Đào",
        "Karma Truyền Thống",
        "Karma Hội Sen Hồng",
        "Karma Tổ Đội Quản Ngục",
        "Karma Mùa Đông Kỳ Diệu",
        "Karma Chinh Phục",
        "Karma Hắc Tinh",
        "Karma Thần Sứ",
        "Taric Lục Bảo",
        "Taric Hồng Ngọc",
        "Taric Huyết Ngọc",
        "Taric Tiệc Bể Bơi",
        "Veigar Pháp Sư",
        "Veigar Khúc Côn Cầu",
        "Veigar Râu Xám",
        "Veigar Quỷ Lùn",
        "Nam Tước Von Veigar",
        "Veigar Siêu Xấu Xa",
        "Veigar Santa Xấu Xa",
        "Veigar Trùm Cuối",
        "Veigar Biệt Đội Omega",
        "Veigar Thần Rừng",
        "Trundle Bóng Chày",
        "Trundle Bãi Rác",
        "Trundle Truyền Thống",
        "Trundle Bảo An",
        "Trundle Hung Thần",
        "Swain Bắc Cực",
        "Swain Cướp Biển",
        "Swain Bạo Chúa",
        "Swain Ngọa Long",
        "Swain Công Nghệ",
        "Caitlyn Du Kích",
        "Caitlyn Cảnh Sát Trưởng",
        "Caitlyn Săn Bắn",
        "Caitlyn Bắc Cực",
        "Sĩ Quan Caitlyn",
        "Caitlyn Thợ Săn",
        "Caitlyn Nguyệt Hồn",
        "Caitlyn Vũ Khí Tối Thượng",
        "Caitlyn Tiệc Bể Bơi",
        "Caitlyn Giả Lập",
        "Caitlyn Giả Lập - Hàng Hiệu",
        "Blitzcrank Rệu Rã",
        "Blitzcrank Thủ Môn",
        "Blitzcrank Đấm Bốc",
        "Blitzcrank Xe Độ",
        "Đâu Phải Blitzcrank",
        "iBlitzcrank",
        "Riot Blitzcrank",
        "Blitzcrank Trùm Phụ",
        "Blitzcrank Hiếm",
        "Blitzcrank Trùm Phụ Đa Sắc",
        "Blitzcrank Trùm Phụ Đa Sắc",
        "Blitzcrank Trùm Phụ Đa Sắc",
        "Blitzcrank Trùm Phụ Đa Sắc",
        "Blitzcrank Trùm Phụ Đa Sắc",
        "Blitzcrank Trùm Phụ Đa Sắc",
        "Blitzcrank Trùm Phụ Đa Sắc",
        "Blitzcrank Mũi Khoan Bóng Tối",
        "Blitzcrank Mũi Khoan Ánh Sáng",
        "Blitzcrank Vạc Lủng",
        "Malphite Rêu Phong",
        "Malphite San Hô",
        "Malphite Cẩm Thạch",
        "Malphite Nham Thạch",
        "Malphite Bắc Cực",
        "Malphite Máy Móc",
        "Malphite Đại Pháo",
        "Malphite Hộ Pháp Không Gian",
        "Katarina Đánh Thuê",
        "Trọng Tài Katarina",
        "Katarina Cướp Biển",
        "Katarina Mèo Kitty",
        "Katarina Chỉ Huy",
        "Katarina Bão Cát",
        "Katarina Cô Nàng Tuần Lộc",
        "Katarina Loạn Thế Anh Hùng",
        "SIÊU PHẨM: Katarina",
        "Katarina Hội Tử Thần",
        "Katarina Học Viện Chiến Binh",
        "Nocturne Băng Giá",
        "Nocturne Hư Không",
        "Nocturne Tàn Bạo",
        "Nocturne Hồn Ma",
        "Nocturne Bất Diệt",
        "Nocturne Bóng Ma",
        "Nocturne Thần Rừng",
        "Maokai Than Củi",
        "Maokai Cột Tổ",
        "Cây Giáng Sinh Maokai",
        "Maokai Đội Mồ",
        "Maokai Thủ Môn",
        "Meo-kai",
        "Maokai Vinh Quang",
        "Renekton Ngân Hà",
        "Renekton Cao Bồi",
        "Renekton Huyết Nộ",
        "Renekton Chiến Tranh Cổ Ngữ",
        "Renekton Hủy Diệt",
        "Renekton Tiệc Bể Bơi",
        "Renekton Thời Tiền Sử",
        "SKT T1 Renekton",
        "Renekton Đồ Chơi",
        "Renekton Công Nghệ",
        "Jarvan IV Biệt Kích",
        "Jarvan IV Đồ Long",
        "Jarvan IV Giáp Đen",
        "Jarvan IV Vinh Quang",
        "Jarvan IV Lữ Bố",
        "Fnatic Jarvan IV",
        "Jarvan IV Hắc Tinh",
        "SSG Jarvan IV",
        "Jarvan IV Công Nghệ",
        "Elise Hoa Độc",
        "Elise Vinh Quang",
        "Elise Huyết Nguyệt",
        "SKT T1 Elise",
        "Elise Siêu Nhân Thiên Hà",
        "Orianna Gô-tích",
        "Orianna Ma Búp Bê",
        "Orianna Thép Gai",
        "TPA Orianna",
        "Orianna Mùa Đông Kỳ Diệu",
        "Orianna Quả Cầu Tình Ái",
        "Orianna Hắc Tinh",
        "Orianna Vinh Quang",
        "Ngộ Không Dung Nham",
        "Ngộ Không Đại Tướng ",
        "Ngộ Không Ngọc Long",
        "Ngộ Không Âm Phủ",
        "Ngộ Không Bá Nhật",
        "Ngộ Không Thương Thủ Thần Thánh",
        "Brand Tận Thế",
        "Brand Du Côn",
        "Brand Lõi Băng",
        "Brand Thây Ma",
        "Brand Hỏa Linh",
        "Brand Trùm Phụ",
        "Brand Hồ Quang",
        "Lee Sin Cổ Điển",
        "Lee Sin Thầy Dòng",
        "Lee Tiểu Long",
        "Lee Sin Quyền Thái",
        "Lee Sin Tiệc Bể Bơi",
        "SKT T1 Lee Sin",
        "Lee Sin Nốc Ao",
        "Lee Sin Tuyệt Vô Thần",
        "Lee Sin Kiến Tạo",
        "Lee Sin Ma Sứ",
        "Lee Sin Ma Sứ - Hàng Hiệu",
        "Vayne Kẻ Phán Quyết",
        "Vayne Quý Tộc",
        "Vayne Đồ Long",
        "Vaynelentine",
        "SKT T1 Vayne",
        "Vayne Hồ Quang",
        "Vayne Đoạt Hồn",
        "SIÊU PHẨM: Vayne",
        "Vayne Tân Niên",
        "Vayne Tân Niên - Hàng Hiệu",
        "Rumble Bên Bờ Hồ",
        "Rumble Cướp Biển",
        "Rumble Siêu Nhân Thiên Hà",
        "Rumble Ông Trùm Xế Độ",
        "Cassiopeia Nổi Loạn",
        "Cassiopeia Tiên Cá",
        "Cassiopeia Cao Quý",
        "Cassiopeia Quý Tỵ",
        "Cassiopeia Bất Diệt",
        "Skarner Sa Mạc",
        "Skarner Cổ Ngữ",
        "Skarner Cỗ Máy Chiến Đấu Alpha",
        "Skarner Vệ Binh Sa Mạc",
        "Heimerdinger Ngoài Hành Tinh",
        "Heimerdinger Nám Mặt",
        "Heimerdinger Độ Máy",
        "Heimerdinger Người Tuyết",
        "Heimerdinger Nguyên Tử",
        "Heimerdinger Luyện Rồng",
        "Nasus Ngân Hà",
        "Nasus Pha-ra-ông",
        "Nasus Hiệp Sĩ Đen",
        "Riot K-9 Nasus",
        "Nasus Địa Ngục",
        "Nasus Đại Công Tước",
        "Nasus Hung Thần",
        "Nasus Mậu Tuất",
        "Nasus Mậu Tuất Đa Sắc",
        "Nidalee Thỏ Tuyết",
        "Nidalee Báo Đốm",
        "Nidalee Người Hầu",
        "Nidalee Pha-ra-ông",
        "Nidalee Phù Thủy",
        "Nidalee Thợ Săn",
        "Nidalee Loạn Thế Anh Hùng",
        "Nidalee Thách Đấu",
        "Nidalee Siêu Nhân Thiên Hà",
        "Nidalee Thần Sứ",
        "Udyr Đai Đen",
        "Udyr Hoang Dã",
        "Udyr Tứ Linh Vệ Hồn",
        "Đâu Phải Udyr",
        "Udyr Sứ Giả Long Thần",
        "Poppy Noxus",
        "Poppy Kẹo Mút",
        "Poppy Thợ Rèn",
        "Poppy Búp Bê",
        "Poppy Chiến Thần",
        "Poppy Búa Đỏ",
        "Poppy Vệ Binh Tinh Tú",
        "Poppy Cô Bé Tuần Lộc",
        "Poppy Công Nghệ",
        "Gragas Thợ Lặn",
        "Gragas Hai Lúa",
        "Santa Gragas",
        "Quý Ông Gragas",
        "Gragas Du Côn",
        "Oktoberfest Gragas",
        "Gragas Siêu Cổ Động Viên",
        "Fnatic Gragas",
        "Gragas Hiệp Sĩ Say Rượu",
        "Gragas Đặc Vụ Bắc Cực",
        "Pantheon Myrmidon",
        "Pantheon Tàn Nhẫn",
        "Pantheon Perseus",
        "Pantheon Chiến Binh Thép",
        "Đại Đao Pantheon",
        "Pantheon Đồ Long",
        "Pantheon Thợ Săn Xác Sống",
        "Pantheon Nướng Bánh",
        "Ezreal Nottingham ",
        "Ezreal Tiền Đạo",
        "Ezreal Băng Giá",
        "Ezreal Thám Hiểm",
        "Ezreal Vũ Khí Tối Thượng",
        "TPA Ezreal",
        "Ezreal Thanh Lịch",
        "Ezreal Át Bích",
        "Ezreal Giả Lập",
        "Ezreal Vệ Binh Tinh Tú",
        "SSG Ezreal",
        "Ezreal Vệ Binh Pyjama",
        "Ezreal Học Viện Chiến Binh",
        "Mordekaiser Kị Sĩ Rồng",
        "Mordekaiser Địa Ngục",
        "Pentakill Mordekaiser",
        "Chúa Tể Mordekaiser",
        "Mordekaiser Già Chuồn",
        "Yorick Đào Mỏ",
        "Pentakill Yorick",
        "Yorick Hồ Quang",
        "Yorick Hội 'Sen' Hồng",
        "Akali Ong Bắp Cày",
        "Akali Hỏa Ngục",
        "Akali Cầu Thủ",
        "Akali Y Tá",
        "Akali Huyết Nguyệt",
        "Akali Nanh Bạc",
        "Akali Thợ Săn",
        "Akali Hải Sản",
        "K/DA Akali",
        "K/DA Akali - Hàng Hiệu",
        "SIÊU PHẨM: Akali",
        "True Damage Akali",
        "Kennen Chết Chóc",
        "Kennen Vua Đầm Lầy",
        "Kennen Karate",
        "Kennen Nội Khoa",
        "Kennen Bắc Cực",
        "Kennen Huyết Nguyệt",
        "Kennen Siêu Nhân",
        "Garen Huyết Kiếm",
        "Garen Chiến Binh Sa Mạc",
        "Garen Biệt Kích",
        "Garen Hiệp Sĩ Đen",
        "Garen Phong Trần",
        "Garen Quân Đoàn Thép",
        "Garen Đô Đốc Độc Đoán",
        "Garen Long Tướng",
        "Garen Sư Vương",
        "Garen Dân Chơi Demacia",
        "Leona Chiến Thần",
        "Leona Vệ Binh",
        "Leona Hội Iron Solari",
        "Leona Tiệc Bể Bơi",
        "SIÊU PHẨM: Leona",
        "Leona Xúc Xích",
        "Leona Nhật Thực",
        "Leona Nguyệt Thực",
        "Malzahar Tể Tướng",
        "Malzahar Hoàng Tử Bóng Đêm",
        "Thần Đèn Malzahar ",
        "Malzahar Lãnh Chúa",
        "Malzahar Ngày Tuyết Rơi",
        "Malzahar Trùm Phụ",
        "Malzahar Công Nghệ",
        "Talon Ngoài Vòng Pháp Luật",
        "Talon Đặc Nhiệm Đỏ",
        "Talon Long Kiếm",
        "SSW Talon",
        "Talon Huyết Nguyệt",
        "Talon Huyền Kiếm Đa Sắc",
        "Talon Huyền Kiếm Đa Sắc",
        "Talon Huyền Kiếm Đa Sắc",
        "Talon Huyền Kiếm",
        "Riven Chuộc Tội",
        "Riven Đặc Nhiệm Đỏ",
        "Riven Thỏ Ngọc",
        "Riven Quán Quân",
        "Riven Long Kiếm",
        "Riven Giả Lập",
        "Riven Quán Quân 2016",
        "Riven Thỏ Ngọc Đa Sắc",
        "Riven Thỏ Ngọc Đa Sắc",
        "Riven Thỏ Ngọc Đa Sắc",
        "Riven Thỏ Ngọc Đa Sắc",
        "Riven Thỏ Ngọc Đa Sắc",
        "Riven Thỏ Ngọc Đa Sắc",
        "Riven Thỏ Ngọc Đa Sắc",
        "Riven Thỏ Ngọc Đa Sắc",
        "Riven Thần Kiếm",
        "Riven Tân Niên",
        "Riven Vũ Khí Tối Thượng",
        "Ngạo Kiếm Riven",
        "Ngạo Kiếm Riven - Hàng Hiệu",
        "Kog'Maw Sâu Róm",
        "Kog'Maw Sa Mạc",
        "Kog'Maw Bướm Chúa",
        "Kog'Maw Tuần Lộc",
        "Kog'Maw Múa Lân",
        "Kog'Maw Biển Sâu",
        "Kog'Maw Hóa Thạch",
        "Kog'Maw Cỗ Máy Chiến Đấu",
        "Kog'Maw Cún Con",
        "Kog'Maw Công Nghệ",
        "Shen Băng Giá",
        "Shen Hoàng Kim Giáp",
        "Shen Ngoại Khoa",
        "Shen Huyết Nguyệt",
        "Shenmurai",
        "TPA Shen",
        "Shenmurai Đa Sắc",
        "Shenmurai Đa Sắc",
        "Shenmurai Đa Sắc",
        "Shenmurai Đa Sắc",
        "Shenmurai Đa Sắc",
        "Shenmurai Đa Sắc",
        "Shenmurai Đa Sắc",
        "Shenmurai Đa Sắc",
        "Shen Vũ Khí Tối Thượng",
        "Shen Hỏa Ngục",
        "Lux Phù Thủy",
        "Lux Đạo Tặc",
        "Lux Biệt Kích",
        "Lux Hoàng Tộc",
        "Lux Quân Đoàn Thép",
        "Lux Vệ Binh Tinh Tú",
        "Lux Thập Đại Nguyên Tố",
        "Lux Tân Niên",
        "Lux Tân Niên Đa Sắc",
        "Lux Tân Niên Đa Sắc",
        "Lux Tân Niên Đa Sắc",
        "Lux Tân Niên Đa Sắc",
        "Lux Tân Niên Đa Sắc",
        "Lux Vệ Binh Pyjama",
        "Lux Học Viện Chiến Binh",
        "Lux Học Viện Chiến Binh - Hàng Hiệu",
        "Xerath Cổ Ngữ",
        "Xerath Cỗ Máy Chiến Đấu",
        "Xerath Hủy Diệt",
        "Xerath Vệ Binh Sa Mạc",
        "Shyvana Vảy Sắt",
        "Shyvana Vuốt Rồng",
        "Shyvana Lửa Đen",
        "Shyvana Rồng Băng",
        "Shyvana Quán Quân",
        "Shyvana Siêu Nhân Thiên Hà",
        "Ahri Hàn Triều",
        "Ahri Bóng Đêm",
        "Ahri Hỏa Hồ Li",
        "Ahri Thần Tượng Âm Nhạc",
        "Ahri Thách Đấu",
        "Ahri Nữ Sinh Thanh Lịch",
        "Ahri Giả Lập",
        "Ahri Vệ Binh Tinh Tú",
        "K/DA Ahri",
        "K/DA Ahri - Hàng Hiệu",
        "Ahri Thần Rừng",
        "Graves Đánh Thuê",
        "Graves Vượt Ngục",
        "Graves Thế Giới Ngầm",
        "Riot Graves",
        "Graves Tiệc Bể Bơi",
        "Graves Thời Niên Thiếu",
        "Graves Ngày Tuyết Rơi",
        "Graves Vinh Quang",
        "Graves Vinh Quang Đa Sắc",
        "Graves Vinh Quang Đa Sắc",
        "Graves Vinh Quang Đa Sắc",
        "Graves Cận Vệ Thép",
        "Graves Hiệu Phó Chiến Binh",
        "Fizz Cư Dân Át-lan-tích",
        "Fizz Lãnh Nguyên",
        "Fizz Đánh Cá",
        "Fizz Hư Không",
        "Fizz Hư Không Đa Sắc",
        "Fizz Hư Không Đa Sắc",
        "Fizz Hư Không Đa Sắc",
        "Fizz Thỏ Phục Sinh",
        "Fizz Siêu Nhân Thiên Hà",
        "Fizz Biệt Đội Omega",
        "Fizz Chú Chó Tinh Nghịch",
        "Fizz Chú Chó Tinh Nghịch - Hàng Hiệu",
        "Volibear Thần Sấm",
        "Volibear Bắc Cực",
        "Volibear Vệ Quân Cổ Ngữ",
        "Volibear Cảnh Vệ Trưởng",
        "Volibear Đô Vật Sấm Sét",
        "Rengar Thợ Săn",
        "Rengar Thợ Săn Bóng Đêm",
        "SSW Rengar",
        "Rengar Thợ Săn Đa Sắc",
        "Rengar Thợ Săn Đa Sắc",
        "Rengar Thợ Săn Đa Sắc",
        "Rengar Thợ Săn Đa Sắc",
        "Rengar Máy Móc",
        "Rengar Máy Móc Đa Sắc",
        "Rengar Máy Móc Đa Sắc",
        "Rengar Máy Móc Đa Sắc",
        "Rengar Máy Móc Đa Sắc",
        "Rengar Máy Móc Đa Sắc",
        "Rengar Máy Móc Đa Sắc",
        "Rengar Hoàng Thượng",
        "Varus Pha Lê Độc",
        "Varus Hồ Quang",
        "Varus Đặc Vụ Bắc Cực",
        "Varus Mũi Tên Tình Ái",
        "Varus Cung Thủ Thần Tốc",
        "Varus Hắc Tinh",
        "Varus Chinh Phục",
        "Varus Hỏa Ngục",
        "Nautilus Vực Thẳm",
        "Nautilus Tàu Ngầm",
        "Nautilus Phi Hành Gia",
        "Nautilus Tổ Đội Quản Ngục",
        "Nautilus Hung Thần",
        "Viktor Người Máy",
        "Viktor Mẫu Thử",
        "Viktor Kẻ Sáng Tạo",
        "Viktor Hội Tử Thần",
        "Sejuani Rừng Xanh",
        "Sejuani Kị Sĩ Đen",
        "Sejuani Truyền Thống",
        "Sejuani Biệt Đội Gấu",
        "Sejuani Kỵ Sĩ Poro",
        "Sejuani Thợ Săn Quái Thú",
        "Sejuani Kị Sĩ Bình Minh",
        "Sejuani Kỷ Hợi",
        "Fiora Ngự Lâm Quân",
        "Fiora Quạ Đêm",
        "Cô Giáo Fiora",
        "SIÊU PHẨM: Fiora",
        "Fiora Tiệc Bể Bơi",
        "Fiora Phi Kiếm",
        "Fiora Kiếm Sĩ Tình Ái",
        "iG Fiora",
        "Ziggs Bác Học Điên",
        "Thiếu Tá Ziggs",
        "Ziggs Tiệc Bể Bơi",
        "Ziggs Ngày Tuyết Rơi",
        "Ziggs Ma Pháp Đại Sư",
        "Ziggs Trùm Phụ",
        "Ziggs Kĩ Sư Không Gian",
        "Ziggs Bánh Ngọt",
        "Lulu Bánh Ngọt",
        "Lulu Độc Ác",
        "Lulu Luyện Rồng",
        "Lulu Mùa Đông Kỳ Diệu",
        "Lulu Tiệc Bể Bơi",
        "Lulu Vệ Binh Tinh Tú",
        "Lulu Pháp Sư Vũ Trụ",
        "Lulu Vệ Binh Pyjama",
        "Draven Đoạt Mệnh",
        "Draven Giác Đấu",
        "Draven Bình Luận Viên",
        "Draven Tiệc Bể Bơi",
        "Draven Thợ Săn Quái Thú",
        "Draven x Draven",
        "Draven Anh Già Tuyết",
        "Hecarim Kị Sĩ Máu",
        "Hecarim Tử Thần",
        "Hecarim Không Đầu",
        "Hecarim Giả Lập",
        "Hecarim Thần Rừng",
        "Hecarim Hung Thần",
        "Hecarim Thánh Kị Sĩ",
        "Hecarim Cao Bồi",
        "Kha'Zix Máy Móc",
        "Kha'Zix Vệ Binh Sa Mạc",
        "Kha'Zix Hoa Độc",
        "Kha'Zix Hắc Tinh",
        "Kha'Zix Quán Quân",
        "Chúa Tể Darius",
        "Darius Vũ Khí Sinh Học",
        "Darius Hoang Dã Đại Vương",
        "Darius Siêu Sao Úp Rổ",
        "Darius Học Sinh Cá Biệt",
        "Darius Hiểm Họa Không Gian",
        "Darius Lang Vương",
        "Darius Cao Bồi",
        "Jayce Giả Kim",
        "Jayce Thanh Lịch",
        "Jayce Kẻ Phản Diện",
        "Jayce Chiến Binh Ánh Sáng",
        "Jayce Học Viện Chiến Binh",
        "Lissandra Huyết Thạch",
        "Lissandra Kiếm Hậu",
        "Lissandra Siêu Máy Tính",
        "Lissandra Tiên Hắc Ám",
        "Diana Chiến Thần Bóng Tối",
        "Diana Hằng Nga",
        "Diana Địa Ngục",
        "Diana Huyết Nguyệt",
        "Diana Hắc Thủy",
        "Quinn Phượng Hoàng",
        "Quinn Do Thám",
        "Quinn Hải Tặc",
        "Quinn Mũi Tên Tình Ái",
        "Syndra Công Lí",
        "Syndra Thủy Tộc Atlantis",
        "Syndra Đầm Rô",
        "Syndra Ngày Tuyết Rơi",
        "SKT T1 Syndra",
        "Syndra Vệ Binh Tinh Tú",
        "Aurelion Sol Hỏa Kim Giáp",
        "Aurelion Sol Máy Móc",
        "Kayn Thợ Săn Linh Hồn",
        "Kayn Hung Thần Không Gian",
        "Zoe Thần Đồng Công Nghệ",
        "Zoe Tiệc Bể Bơi",
        "Zoe Vệ Binh Tinh Tú",
        "Zyra Hỏa Mộc",
        "Zyra Quỷ Ám",
        "SKT T1 Zyra",
        "Zyra Mẹ Rồng",
        "Kai'Sa Thiên Sứ Tương Lai",
        "K/DA Kai'Sa",
        "K/DA Kai'Sa - Hàng Hiệu",
        "iG Kai'Sa",
        "Kai'Sa Giả Lập",
        "Gnar Khủng Long Con",
        "Gnar Quý Ông",
        "Gnar Ngày Tuyết Rơi",
        "Gnar Mãnh Sư Đô Vật ",
        "Gnar Siêu Nhân Thiên Hà",
        "SSG Gnar",
        "Zac Vũ Khí Đặc Chất",
        "Zac Tiệc Bể Bơi",
        "SKT T1 Zac",
        "Yasuo Cao Bồi",
        "SIÊU PHẨM: Yasuo",
        "Yasuo Huyết Nguyệt",
        "Yasuo Ma Kiếm",
        "Yasuo Kiếm Khách Không Gian",
        "Yasuo Phản Diện",
        "True Damage Yasuo",
        "Vel'Koz Cỗ Máy Chiến Đấu",
        "Vel'Koz Hồ Quang",
        "Đâu Phải Vel'Koz",
        "Taliyah Freljord",
        "SSG Taliyah",
        "Camille Siêu Máy Tính",
        "Camille Tiên Hắc Ám",
        "iG Camille",
        "Braum Đồ Long",
        "Braum Mãnh Hổ Đô Vật",
        "Braum Hộ Vệ Dũng Cảm",
        "Braum Ông Già Tuyết",
        "Braum Thế Giới Ngầm",
        "Braum Bánh Ngọt",
        "Jhin Cao Bồi",
        "Jhin Huyết Nguyệt",
        "SKT T1 Jhin",
        "SIÊU PHẨM: Jhin",
      ],
    };
  },

  mounted() {
    this.$store.state.darkMode = false;
    this.pathName = this.$route.params.typeAccount;
  },
};
</script>

<style lang="scss">
.list-accounts {
  width: 100%;
  min-height: calc(100% - 74px);
  height: auto;
  background-color: white;
  margin-top: 74px;
  padding-top: 1px;

  .wrap-list-accounts {
    padding-bottom: 20px;
    margin: 30px auto 0px auto;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;

    .title {
      text-transform: uppercase;
      font-size: 1.5rem;
      text-align: left;
      padding: 15px 10px;
      color: var(--black-one);
    }

    .filter-block {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 20px;
      padding: 0 10px;
      margin-bottom: 30px;

      .list-btn-action {
        border: none !important;
        justify-content: space-between;
        align-items: center;

        .btn-search,
        .btn-view-all {
          width: 48%;
          height: 100%;
          display: flex;
          align-items: center;
          color: white;
          border-radius: 5px;
          justify-content: center;
        }

        .btn-search {
          background: var(--red-btn);
        }
        .btn-view-all {
          background-color: var(--grey-btn);
        }
      }

      .filter-option {
        grid-column: span 3;
        display: flex;
        border: 2px solid var(--grey-border);

        .type-filter {
          width: 95px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
        }

        select {
          width: 101%;
        }
        input,
        #price-from,
        #price-to {
          width: calc(100% - 95px);
          border-left: 2px solid var(--grey-border) !important;
        }
        #find-champ-name,
        #find-champ-skin,
        .type-filter {
          background-color: var(--grey-btn-light);
          height: 101%;
        }
        input,
        select {
          padding: 10px;
          outline: none;
          border: none;
          font-size: 1rem;
        }
      }
    }

    .list-account {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 20px;
      padding: 0 10px;

      .account-block {
        grid-column: span 3;
        display: flex;
        border: 1px solid var(--black-border);
        padding-bottom: 20px;
        transition: 0.4s;

        .wrap-account-block {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: relative;

          .account-id {
            position: absolute;
            top: 5px;
            right: 5px;
            color: white;
            background-color: var(--red-btn);
            font-weight: 600;
            font-size: 0.9rem;
            padding: 4px 8px;
            border-radius: 4px;
          }

          .account-image {
            width: 100%;
          }

          .account-infor {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            width: 100%;
            grid-gap: 10px;
            padding: 10px;

            > div {
              grid-column: span 6;
              text-align: center;

              p {
                font-size: 0.9rem;
              }
            }
          }

          .list-btn {
            width: 100%;
            padding: 0 10px;
            display: flex;
            justify-content: space-around;

            .btn-price,
            .btn-detail {
              padding: 7px 17px;
              border: 1px solid var(--red-text);
              border-radius: 5px;
              font-size: 0.9rem;
            }

            .btn-price {
              color: var(--red-text);
            }
            .btn-detail {
              background-color: var(--red-btn);
              color: #ffffff;
              transition: 0.4s;
            }
            .btn-detail:hover {
              background-color: var(--yellow-active);
              color: black;
              border: 1px solid var(--yellow-active);
            }
          }
        }
      }

      .account-block:hover {
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
      }
    }

    .paging {
      display: flex;
      justify-content: space-around;
      margin: 30px 0;
      .wrap-paging {
        display: flex;
        .btn-num-page,
        .btn-pre-page,
        .btn-next-page {
          font-size: 1.2rem;
          color: var(--grey-text);
          padding: 7px 14px;
          border-radius: 5px;
          border: 1px solid var(--grey-btn);
          margin: 0 5px;
          cursor: pointer;
        }
        .active {
          background-color: var(--red-btn);
          color: white !important;
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .list-account .account-block {
    grid-column: span 6 !important;

    .btn-price,
    .btn-detail {
      padding: 12px 22px !important;
    }
  }

  .wrap-list-accounts {
    .filter-block {
      .filter-option {
        grid-column: span 6 !important;
      }
    }
  }
}

@media (max-width: 480px) {
  .list-account .account-block {
    grid-column: span 12 !important;
  }

  .wrap-list-accounts {
    margin: 30px auto 0px auto;

    .filter-block {
      .filter-option {
        grid-column: span 12 !important;

        .btn-search,
        .btn-view-all {
          padding: 12px 0;
        }
      }
    }
  }
}
</style>
