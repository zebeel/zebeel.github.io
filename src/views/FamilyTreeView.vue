<template>
  <div id="tree"></div>
</template>

<script>
import FamilyTree from '@balkangraph/familytree.js';
import { familyData } from '@/libs/familytree';

export default {
  name: 'FamilyTree',
  data() {
    return {};
  },
  mounted() {
    this.applyTagsToNodes();
    this.renderFamilyTree();
  },
  methods: {
    applyTagsToNodes() {
      // Thêm tag "deceased" cho các node có giá trị deadDate
      familyData.forEach(node => {
        if (!node.img) {
          node.img = node.gender === 'male' ? 'images/family-tree/men.jpg' : 'images/family-tree/women.jpg'
        }
        if (node.deadDate) {
          node.tags = ["deceased"];
        }
      });
    },
    renderFamilyTree() {
      new FamilyTree(document.getElementById('tree'), {
        nodes: familyData,
        nodeBinding: {
          field_0: "name", // Hiển thị tên
          field_1: "title",
          img_0: "img" // Hiển thị hình ảnh
        },
        // Định dạng cho hình ảnh
        nodeCircleMenu: true,
        template: "hugo", // Template có hỗ trợ hiển thị hình ảnh
        // nodeMenu: true,
        scaleInitial: FamilyTree.match.width,
        min: 0.5,
        max: 2,
        layout: FamilyTree.normal,
        tags: {
          deceased: {
            template: "hugo",
            node: {
              backgroundColor: "#d3d3d3",
              img_0: {
                filter: "grayscale(1)" // Chuyển hình ảnh thành đen trắng
              }
            }
          }
        },
      });
    },
  },
};
</script>

<style scoped>
#tree {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
