<template>
  <div v-if="totalPages() > 0" class="pagination">
    <span v-if="showPrevious()" class="pagination-btn" @click="updatePage(currentPage - 1)"> Previous </span>

    <button v-for="page in pages" :key="page">
      <span :class="{beActive: page.active}" @click="updatePage(page.id - 1 )">{{page.id}}</span>
    </button>

    <span v-if="showNext()" class="pagination-btn" @click="updatePage(currentPage + 1)"> Next </span>
    <!-- {{currentPage + 1}} of {{totalPages()}} -->
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['blogs', 'currentPage', 'pageSize'],
  data(){
    return {
      pages:[],
    }
  },
  beforeMount() {
    this.listPages()
    this.activeCurrentPage()
  },
  beforeUpdate(){
    this.activeCurrentPage()
  },
  methods: {
    updatePage(pageNumber) {
      console.log('Page number: '+ pageNumber)
      this.$emit('updatePage', pageNumber)
    },
    listPages(){
      for(let i = 1; i <= this.totalPages(); i++){
        this.pages.push({
          id: i,
          active: false
        }); 
      }
      return console.log(this.pages);
    },
    totalPages(){
      //return the smallest integer greater than or equal given number
      return Math.ceil(this.blogs.length / this.pageSize);
    },
    showPrevious() {
      return this.currentPage == 0 ? false : true;
    },
    showNext() {
      return this.currentPage == (this.totalPages() -1) ? false : true;
    },
    activeCurrentPage(){
      this.pages.forEach(page => page.active = false);
      this.pages.find((page) => {
        if(this.currentPage + 1 == page.id) page.active = true
      })
      console.log(this.currentPage + 1)
    },
  }
};
</script>

<style scoped>
button{
  background: white;
  border: 0;
  cursor: pointer;
}
  button span{
    display: inline-block;
    border-radius: 5px;
    margin: 0;
    padding: 5px 15px;
    border: 1px solid #1e2731;
  }
  button span:hover{
    background-color: #f3f3f3;
  }
.pagination{
  padding: 10px;
  margin: auto;
}
.pagination-btn {
  display: inline-block;
  cursor: pointer;
  margin: 0 10px;
  border-bottom: 1px solid;
  transition: 0.3s;
}
.pagination-btn:hover{
  color: black;
}
/* Dynamic CSS */
.beActive{
  background-color: #2c3e50;
  color: white;
}
.beActive:hover{
  background-color: #2c3e50;
  color: white;
}
</style>
