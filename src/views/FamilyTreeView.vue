<template>
  <div id="tree"></div>
</template>

<script>
import FamilyTree from '@balkangraph/familytree.js';

export default {
  name: 'FamilyTree',
  data() {
    return {
      id: 1,
    }
  },
  mounted() {
    // Dữ liệu mẫu cho cây gia phả
    const familyData = [
      { id: 1, pids: [2], name: "Lê Văn Nhạ", title: "Cao Tổ Khảo", gender: "male" },
      { id: 2, pids: [1], name: "Cố Nhạ bà", title: "Cao Tổ Tỷ", gender: "female" },
      { id: 3, mid: 2, fid: 1, name: "Lê Văn Nhạ(con)", title: "Tằng Tổ Bá Khảo", gender: "male" },
      { id: 4, mid: 2, fid: 1, pids: [5, 6], name: "Lê Văn Tốn", title: "Tằng Tổ Khảo", gender: "male" },
      { id: 5, pids: [4], name: "Bà Chí", title: "Tằng Tổ Tỷ", gender: "female" },
      { id: 6, pids: [4], name: "Nguyễn Thị Chẩm", title: "Tằng Tổ Tỷ", gender: "female" },
      { id: 7, mid: 5, fid: 4, name: "Lê Văn Chí", title: "Hiển Tổ Bá Khảo", gender: "male" },
      { id: 8, mid: 6, fid: 4, pids: [10], name: "Lê Văn Bường", title: "Hiển Tổ Khảo", gender: "male" },
      { id: 9, mid: 6, fid: 4, name: "Lê Thị Chửng", title: "Bà Cô", gender: "female" },
      { id: 10, pids: [8], name: "Đậu Nguyễn Thị Em", title: "Hiển Tổ Tỷ", gender: "female" },
      { id: 11, mid: 10, fid: 8, name: "Lê Thị Duệ", title: "Đường Cô", gender: "female" },
      { id: 12, mid: 10, fid: 8, pids: [18], name: "Lê Trung Thành", title: "", gender: "male" },
      { id: 13, mid: 10, fid: 8, pids: [], name: "Lê Thị Loan", title: "", gender: "female" },
      { id: 14, mid: 10, fid: 8, pids: [19], name: "Lê Văn Lương", title: "", gender: "male" },
      { id: 15, mid: 10, fid: 8, pids: [], name: "Lê Thị Tâm", title: "", gender: "female" },
      { id: 16, mid: 10, fid: 8, pids: [20], name: "Lê Minh Lý", title: "", gender: "male" },
      { id: 17, mid: 10, fid: 8, pids: [], name: "Lê Thị Lợi", title: "", gender: "female" },
      { id: 18, pids: [12], name: "Bà Nghiên", title: "", gender: "female" },
      { id: 19, pids: [14], name: "Bà Đức", title: "", gender: "female" },
      { id: 20, pids: [16], name: "Bà Phương", title: "", gender: "female" },
      { id: 21, mid: 18, fid: 12, pids: [], name: "Lê Thị Hiền", title: "", gender: "female" },
      { id: 22, mid: 18, fid: 12, pids: [], name: "Lê Thị Thảo", title: "", gender: "female" },
      { id: 23, mid: 18, fid: 12, pids: [], name: "Lê Thị Huyền", title: "", gender: "female" },
      { id: 24, mid: 18, fid: 12, pids: [], name: "Lê Thị Trang", title: "", gender: "female" },
      { id: 25, mid: 18, fid: 12, pids: [26], name: "Lê Văn Đạt", title: "", gender: "male" },
      { id: 26, pids: [25], name: "Nguyễn Thị Như Quỳnh", title: "", gender: "female" },
      { id: 27, mid: 26, fid: 25, pids: [], name: "Tép", title: "", gender: "female" },
      { id: 28, mid: 26, fid: 25, pids: [], name: "Nghé", title: "", gender: "female" },
      { id: 29, mid: 19, fid: 14, pids: [], name: "Lê Thị Hường", title: "", gender: "female" },
      { id: 30, mid: 19, fid: 14, pids: [32], name: "Lê Văn Hải", title: "", gender: "male" },
      { id: 31, mid: 19, fid: 14, pids: [33], name: "Lê Thanh Hưng", title: "", gender: "male" },
      { id: 32, pids: [30], name: "Thủy", title: "", gender: "female" },
      { id: 33, pids: [31], name: "Liên", title: "", gender: "female" },
      { id: 34, mid: 32, fid: 30, pids: [], name: "Lê Hải Bình", title: "", gender: "male" },
      { id: 35, mid: 32, fid: 30, pids: [], name: "Lê Hải Đăng", title: "", gender: "male" },
      { id: 36, mid: 33, fid: 31, pids: [], name: "Lê Quang Khải", title: "", gender: "male" },
      { id: 37, mid: 33, fid: 31, pids: [], name: "Kem", title: "", gender: "female" },
      { id: 38, mid: 20, fid: 16, pids: [41], name: "Lê Văn Chương", title: "", gender: "male" },
      { id: 39, mid: 20, fid: 16, pids: [], name: "Lê Văn Dương", title: "", gender: "male" },
      { id: 40, mid: 20, fid: 16, pids: [], name: "Lê Thị Trâm", title: "", gender: "male" },
      { id: 41, pids: [38], name: "Trần Thị Nhung", title: "", gender: "female" },
      { id: 42, mid: 41, fid: 38, pids: [], name: "Lê Trần Nhật Long", title: "", gender: "male" },
    ];

    // FamilyTree.templates.tommy.field_0 =
    //   `<text class="field_0" style="font-size: 20px;" fill="#ffffff" x="125" y="30" text-anchor="middle">{val}</text>`;
    // FamilyTree.templates.tommy.field_1 =
    //   `<text class="field_1" style="font-size: 14px;" fill="#ffffff" x="125" y="50" text-anchor="middle">{val}</text>`;
    // FamilyTree.templates.tommy.field_2 =
    //   `<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="70" text-anchor="middle">{val}</text>`;
    // FamilyTree.templates.tommy.field_3 =
    //   `<text class="field_3" style="font-size: 14px;" fill="#ffffff" x="125" y="90" text-anchor="middle">{val}</text>`;

    // Khởi tạo FamilyTree.js
    new FamilyTree(document.getElementById('tree'), {
      nodes: familyData,
      template: 'hugo',
      nodeBinding: {
          field_0: "name",
          field_1: "title",
          field_2: "sinhtu",
          img_0: "img",
      },
      scaleInitial: FamilyTree.match.width
    });
  },
  methods: {
    getID() {
      return this.id ++;
    },
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  max-width: 100vw;
}
#tree {
  width: 100vw;
  height: 100vh;
  border: 1px solid #ccc;
}
</style>
