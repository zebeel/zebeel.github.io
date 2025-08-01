// Configuration
const CONFIG = {
    baseUrl: 'https://raw.githubusercontent.com/zebeel/zebeel.github.io/refs/heads/gh-pages/blog/'
};

const postsData = [
    {
        id: 11,
        at: '2024年8月22日 07:04 AM',
        location: 'ハティン総合病院',
        content: `赤ちゃんはレ・ミン・キエット、みんなからは「ミン」と呼ばれています。今日はママ思いでとても早く生まれてくれました。体重は3.1キロ、身長は50cm。家族みんな、あなたをとてもとても愛しています 💗💗💗`,
        images: ['assets/images/post/11/1.jpg', 'assets/images/post/11/2.jpg', 'assets/images/post/11/3.jpg', 'assets/images/post/11/4.jpg']
    },
    {
        id: 10,
        at: '2022年3月17日 02:13 PM',
        location: '根本産婦人科',
        content: `ぼくの名前はレ・チャン・ニャット・ロン。家ではパパとママがトラ（トーラ）と呼んでいます。ママを2日間も大変にさせて、2022/03/17 14:13にやっと生まれました。体重は3.2キロ、身長は50cm。パパとママはあなたをとてもとても愛しています 💗💗💗`,
        images: ['assets/images/post/10/1.jpg']
    },
    {
        id: 9,
        at: '2021年6月3日 12:00 AM',
        location: '在日ベトナム大使館',
        content: `数か月の準備と書類手続きの末、ついに登録の日を迎えました。朝4時に起きて一番早い電車で行ったけど、到着したら誰もいなかった 😄。何時間も待った後、やっと手続き完了。正式に夫婦になりました。これからよろしくね 😙。`,
        images: ['assets/images/post/7/img1.jpg']
    },
    {
        id: 8,
        at: '2021年3月25日 12:00 AM',
        location: '浅草',
        content: `婚約儀式の後、二人で記念にKIMONO写真を撮ることに決めました。場所は浅草で、KIMONOもこの近くの店でレンタルしました。二人の正式なお付き合いを記念する楽しい体験でした。<br><i class="fas fa-camera-retro" style="font-size: 0.8em"></i> <a class="no-deco" href="https://fb.com/Sulerhy">ファム・ドゥック・ホアン</a>`,
        images: [
            'assets/images/post/6/img1.jpg',
            'assets/images/post/6/img2.jpg',
            'assets/images/post/6/img3.jpg',
            'assets/images/post/6/img4.jpg',
            'assets/images/post/6/img5.jpg',
            'assets/images/post/6/img6.jpg',
            'assets/images/post/6/img7.jpg',
            'assets/images/post/6/img8.jpg',
            'assets/images/post/6/img9.jpg',
            'assets/images/post/6/img10.jpg',
            'assets/images/post/6/img11.jpg',
            'assets/images/post/6/img12.jpg',
            'assets/images/post/6/img13.jpg',
            'assets/images/post/6/img14.jpg',
            'assets/images/post/6/img15.jpg',
            'assets/images/post/6/img16.jpg',
            'assets/images/post/6/img17.jpg',
            'assets/images/post/6/img18.jpg',
            'assets/images/post/6/img19.jpg',
            'assets/images/post/6/img20.jpg',
            'assets/images/post/6/img21.jpg',
            'assets/images/post/6/img22.jpg',
            'assets/images/post/6/img23.jpg',
            'assets/images/post/6/img24.jpg',
            'assets/images/post/6/img25.jpg',
            'assets/images/post/6/img26.jpg',
            'assets/images/post/6/img27.jpg',
            'assets/images/post/6/img28.jpg',
            'assets/images/post/6/img29.jpg',
            'assets/images/post/6/img30.jpg',
            'assets/images/post/6/img31.jpg',
            'assets/images/post/6/img32.jpg',
            'assets/images/post/6/img33.jpg',
            'assets/images/post/6/img34.jpg',
            'assets/images/post/6/img35.jpg',
            'assets/images/post/6/img36.jpg',
            'assets/images/post/6/img37.jpg',
            'assets/images/post/6/img38.jpg',
            'assets/images/post/6/img39.jpg'
        ]
    },
    {
        id: 7,
        at: '2021年3月24日 09:00 AM',
        location: 'クアンソン - カムクアン',
        content: `婚約儀式は、二人が不在でも両家の家族が集まる親しい会食でした。ここから、二人の正式な交際が始まりました😊。<br><i class="far fa-images" style="font-size: 0.8em"></i> 左：ホンお母さん。右：フオンお母さん。`,
        images: ['assets/images/post/5/img1.jpg']
    },
    {
        id: 6,
        at: '2020年7月26日 01:00 PM',
        location: '横浜',
        content: `一緒に横浜へ`,
        images: [
            'assets/images/post/8/img1.jpeg',
            'assets/images/post/8/img2.jpeg',
            'assets/images/post/8/img3.jpeg',
            'assets/images/post/8/img4.jpeg',
            'assets/images/post/8/img5.jpeg',
            'assets/images/post/8/img6.jpeg',
            'assets/images/post/8/img7.jpeg',
            'assets/images/post/8/img8.jpeg',
            'assets/images/post/8/img9.jpeg',
            'assets/images/post/8/img10.jpeg',
            'assets/images/post/8/img11.jpeg',
            'assets/images/post/8/img12.jpeg',
            'assets/images/post/8/img13.jpeg',
            'assets/images/post/8/img14.jpeg'
        ]
    },
    {
        id: 5,
        at: '2020年7月12日 12:00 AM',
        location: '足立区',
        content: `ハニー、お誕生日おめでとう 🎉`,
        images: [
            'assets/images/post/9/img1.jpeg',
            'assets/images/post/9/img6.jpeg',
            'assets/images/post/9/img3.jpeg',
            'assets/images/post/9/img4.jpeg',
            'assets/images/post/9/img5.jpeg',
            'assets/images/post/9/img7.jpeg',
            'assets/images/post/9/img8.jpeg',
            'assets/images/post/9/img2.jpeg'
        ]
    },
    {
        id: 4,
        at: '2020年3月20日 05:20 PM',
        location: '仙台',
        content: `長い間知り合ってから、彼はついに私に会いに来ました。これが二人の最初のデートで、関係に大きな一歩を踏み出しました。`,
        images: ['assets/images/post/4/1.png']
    },
    {
        id: 3,
        at: '2019年12月30日 03:19 PM',
        location: 'お台場',
        content: `お台場旅行で初めて一緒に撮った写真。名前も知らない中国人カップルに感謝。`,
        images: ['assets/images/post/3/img1.jpg']
    },
    {
        id: 2,
        at: '2019年12月29日 06:10 PM',
        location: '東京駅',
        content: `初めての出会いの思い出。夕方、東京駅でダットさん夫妻と一緒に。`,
        images: ['assets/images/post/2/img1.jpg']
    },
    {
        id: 1,
        at: '2019年8月17日 11:35 PM',
        location: null,
        content: `こんにちは、ニュンさん。僕の名前はチュオン、よろしくお願いします 😊 よろしくね。
        <br>※ 特に感謝を込めて、仲人の<a class="no-deco" href="https://www.facebook.com/longnvht" target="_blank">ロン</a>さんと<a class="no-deco" href="https://www.facebook.com/vo.thuong.773" target="_blank">ホアイ</a>さん 🥰`,
        images: ['assets/images/post/1/img1.jpg']
    }
];

// Posts data - mapped from original data
const postsDataVN = [
    {
        id: 11,
        at: '2024 Aug 22 at 07:04 AM',
        location: 'Bệnh viện đa khoa Hà Tĩnh',
        content: `Bé là Lê Minh Kiệt, mọi người còn gọi em là Min. Hôm nay em thương mẹ nên ra rất nhanh. Em nặng 3 ký 1, dài 50 cm. Cả nhà yêu em nhiều nhiều 💗💗💗`,
        images: ['assets/images/post/11/1.jpg', 'assets/images/post/11/2.jpg', 'assets/images/post/11/3.jpg', 'assets/images/post/11/4.jpg']
    },
    {
        id: 10,
        at: '2022 Mar 17 at 02:13 PM',
        location: '根本産婦人科',
        content: `Em tên là LÊ TRẦN NHẬT LONG, ở nhà bố mẹ gọi em là Tora(tô-ra). Sau 2 ngày làm khổ mẹ thì hôm nay 2022/03/17 14:13 em đã chui ra. Em nặng 3 ký 2, dài 50 cm. Bố mẹ yêu em nhiều nhiều 💗💗💗`,
        images: ['assets/images/post/10/1.jpg']
    },
    {
        id: 9,
        at: '2021 Jun 03 at 12:00 AM',
        location: 'Đại sứ quán Việt Nam tại Nhật Bản',
        content: `Sau nhiều tháng tìm hiểu và chuẩn bị giấy tờ thủ tục cuối cùng cũng đến ngày đi đăng ký. Dậy từ 4h sáng để đi chuyến tàu sớm nhất nhưng lên tới nơi không có ai 😄. Sau nhiều giờ chờ đợi cuối cùng thủ tục cũng xong, chính thức trở thành vợ chồng. これからよろしくね 😙。`,
        images: ['assets/images/post/7/img1.jpg']
    },
    {
        id: 8,
        at: '2021 Mar 25 at 12:00 AM',
        location: 'Asakusa',
        content: `Sau ngày lễ đặt trầu, hai đứa quyết định thực hiện một bộ ảnh kỉ niệm với KIMONO. Địa điểm được lựa chọn là Asakusa, KIMONO cũng được thuê ở một cửa hàng tại đây. Một trải nghiệm thú vị đánh dấu sự kiện hai người chính thức qua lại.<br><i class="fas fa-camera-retro" style="font-size: 0.8em"></i> <a class="no-deco" href="https://fb.com/Sulerhy">Phạm Đức Hoàng</a>`,
        images: [
            'assets/images/post/6/img1.jpg',
            'assets/images/post/6/img2.jpg',
            'assets/images/post/6/img3.jpg',
            'assets/images/post/6/img4.jpg',
            'assets/images/post/6/img5.jpg',
            'assets/images/post/6/img6.jpg',
            'assets/images/post/6/img7.jpg',
            'assets/images/post/6/img8.jpg',
            'assets/images/post/6/img9.jpg',
            'assets/images/post/6/img10.jpg',
            'assets/images/post/6/img11.jpg',
            'assets/images/post/6/img12.jpg',
            'assets/images/post/6/img13.jpg',
            'assets/images/post/6/img14.jpg',
            'assets/images/post/6/img15.jpg',
            'assets/images/post/6/img16.jpg',
            'assets/images/post/6/img17.jpg',
            'assets/images/post/6/img18.jpg',
            'assets/images/post/6/img19.jpg',
            'assets/images/post/6/img20.jpg',
            'assets/images/post/6/img21.jpg',
            'assets/images/post/6/img22.jpg',
            'assets/images/post/6/img23.jpg',
            'assets/images/post/6/img24.jpg',
            'assets/images/post/6/img25.jpg',
            'assets/images/post/6/img26.jpg',
            'assets/images/post/6/img27.jpg',
            'assets/images/post/6/img28.jpg',
            'assets/images/post/6/img29.jpg',
            'assets/images/post/6/img30.jpg',
            'assets/images/post/6/img31.jpg',
            'assets/images/post/6/img32.jpg',
            'assets/images/post/6/img33.jpg',
            'assets/images/post/6/img34.jpg',
            'assets/images/post/6/img35.jpg',
            'assets/images/post/6/img36.jpg',
            'assets/images/post/6/img37.jpg',
            'assets/images/post/6/img38.jpg',
            'assets/images/post/6/img39.jpg'
        ]
    },
    {
        id: 7,
        at: '2021 Mar 24 at 09:00 AM',
        location: 'Quang Sơn - Cẩm Quang',
        content: `Lễ đặt trầu cũng là bữa gặp mặt thân mật hai bên gia đình mặc dù không có mặt hai đứa. Từ đây đánh dấu hai đứa chính thức qua lại với nhau 😊.<br><i class="far fa-images" style="font-size: 0.8em"></i> Bên trái: Mẹ Hồng. Bên phải: Mẹ Phương.`,
        images: ['assets/images/post/5/img1.jpg']
    },
    {
        id: 6,
        at: '2020 Jul 26 at 01:00 PM',
        location: 'Yokohama',
        content: `Together to Yokohama`,
        images: [
            'assets/images/post/8/img1.jpeg',
            'assets/images/post/8/img2.jpeg',
            'assets/images/post/8/img3.jpeg',
            'assets/images/post/8/img4.jpeg',
            'assets/images/post/8/img5.jpeg',
            'assets/images/post/8/img6.jpeg',
            'assets/images/post/8/img7.jpeg',
            'assets/images/post/8/img8.jpeg',
            'assets/images/post/8/img9.jpeg',
            'assets/images/post/8/img10.jpeg',
            'assets/images/post/8/img11.jpeg',
            'assets/images/post/8/img12.jpeg',
            'assets/images/post/8/img13.jpeg',
            'assets/images/post/8/img14.jpeg'
        ]
    },
    {
        id: 5,
        at: '2020 Jul 12 at 12:00 AM',
        location: 'Aidachi',
        content: `Happy birth day to my honey 🎉`,
        images: [
            'assets/images/post/9/img1.jpeg',
            'assets/images/post/9/img6.jpeg',
            'assets/images/post/9/img3.jpeg',
            'assets/images/post/9/img4.jpeg',
            'assets/images/post/9/img5.jpeg',
            'assets/images/post/9/img7.jpeg',
            'assets/images/post/9/img8.jpeg',
            'assets/images/post/9/img2.jpeg'
        ]
    },
    {
        id: 4,
        at: '2020 Mar 20 at 05:20 PM',
        location: 'Sendai',
        content: `Sau thời gian dài quen biết, anh quyết định đến thăm em cũng là lần hẹn hò đầu tiên của hai đứa. Một bước tiến dài trong mối quan hệ tình cảm của hai đứa.`,
        images: ['assets/images/post/4/1.png']
    },
    {
        id: 3,
        at: '2019 Dec 30 at 03:19 PM',
        location: 'Odaiba',
        content: `Bức hình chụp cùng nhau đầu tiên trong chuyến đi du lịch Odaiba. Cám ơn hai bạn Trung Quốc không biết tên.`,
        images: ['assets/images/post/3/img1.jpg']
    },
    {
        id: 2,
        at: '2019 Dec 29 at 06:10 PM',
        location: 'Tokyo Station',
        content: `Kỷ niệm lần gặp gỡ đầu tiên lúc chiều muộn ở ga Tokyo cùng vợ chồng a Đạt - Trinh.`,
        images: ['assets/images/post/2/img1.jpg']
    },
    {
        id: 1,
        at: '2019 Aug 17 at 11:35 PM',
        location: null,
        content: `Hi Nhung, anh tên là Chương, rất vui vì được biết em 😊 よろしくね。
        <br>※ Đặc biệt cảm ơn ông bà mai <a class="no-deco" href="https://www.facebook.com/longnvht" target="_blank">Long</a>-<a class="no-deco" href="https://www.facebook.com/vo.thuong.773" target="_blank">Hoài</a> 🥰`,
        images: ['assets/images/post/1/img1.jpg']
    }
];