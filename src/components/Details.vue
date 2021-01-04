<template>
  <!--布局-->
  <el-container class="container">
    <!--header部分-->
    <el-header class="header">Header</el-header>
    <el-container>
      <!--aside部分-->
      <el-aside width="380px" class="aside">
        <div class="saside">
          <!--个人简介-->
          <el-row class="intro">
            <div class="one">
              <span><img src="../assets/profile.jpg" alt=""></span>
              <span>我是昵称</span>
            </div>
            <el-divider></el-divider>
            <div class="two">
              <section>
                <div class="top">456</div>
                <div class="bottom">获赞</div></section>
              <section>
                <div class="top">21</div>
                <div class="bottom">收藏</div></section>
              <section>
                <div class="top">12</div>
                <div class="bottom">评论</div></section>
              <section>
                <div class="top">36</div>
                <div class="bottom"></div>贡献</section>
            </div>
            <div class="three">
              <button>关注</button>
              <button>主页</button>
            </div>
            <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
          </el-row>
          <!--搜索框-->
          <div class="input">
            <el-input
              placeholder="请输入项目名称"
              v-model="input4">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <!--日历-->
          <el-calendar v-model="value" class="calender"></el-calendar>
          <!--目录部分-->
          <el-row class="tree_title">
            <el-col :span="24">目录<div class="grid-content bg-purple-dark"></div></el-col>
          </el-row>
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
          </el-tree>
        </div>
      </el-aside>
      <!--main部分-->
      <el-main class="main">
        <div class="smain">
          <h1>我是项目标题</h1>
          <!--article_header-->
          <el-row class="row">
            <el-col :span="24">
              <div>
                <span>我是昵称</span>
                <span>2020-12-28</span>
                <span><img src="../assets/查看.png" alt="" style="margin-bottom: -6px;">3255</span>
                <span><img src="../assets/收藏.png" alt="" style="margin-bottom: -6px;">13</span>
                <span><a href="javascript:;">我是GitHub链接</a></span>
              </div>
              <div class="grid-content bg-purple-dark">
                <!--分类专栏标签-->
                <div class="tag-group">
                  <span class="tag-group__title" style="text-indent: 6em">分类专栏：</span>
                  <el-tag
                    size="small"
                    v-for="item in items"
                    :key="item.label"
                    :type="item.type"
                    effect="dark">
                    {{ item.label }}
                  </el-tag>
                </div>
              </div></el-col>
          </el-row>
          <!--项目介绍-->
          <el-row class="project_intro">
            <el-col :span="24" class="news">
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍
              <div class="grid-content bg-purple-dark"></div></el-col>
          </el-row>
          <!--运行截图-->
          <h2 style="padding-left: 5px">运行截图</h2>
          <el-divider></el-divider>
          <div class="demo-image__lazy">
            <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
          </div>
          <!--用户操作-->
          <el-row class="operate">
            <el-col :span="24">
              <ul>
                <li><a href="#" class="zan"><img src="../assets/点赞.png" alt="">好评</a></li>
                <li><a href="#" class="cai"><img src="../assets/差评.png" alt="">差评</a></li>
                <li><a href="#" class="shoucang"><img src="../assets/收藏2.png" alt="">收藏</a></li>
                <li><a href="#"><img src="../assets/分享.png" alt="">分享</a></li>
              </ul>
              <div class="grid-content bg-purple-dark"></div></el-col>
          </el-row>
          <!--tab栏切换-->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="热门评论" name="first">热门评论</el-tab-pane>
            <el-tab-pane label="其他项目" name="second">其他项目</el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      items: [
        {type: '', label: '标签一'},
        {type: 'success', label: '标签二'},
        {type: 'info', label: '标签三'},
        {type: 'danger', label: '标签四'},
        {type: 'warning', label: '标签五'}
      ],
      value: new Date(),
      input4: '',
      activeName: 'second',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    };


  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleNodeClick(data) {
      console.log(data);
    }
  },
}
</script>

<style scoped>
  .container {
    height: 100%;
    width: 100%;
  }

  header {
    background-color: pink;
    height: 50px;
  }

  /*aside部分*/
  .aside {
    background-color: #f4f4f3;
  }

  .aside .saside {
    margin: 20px 0 0 40px;
  }

  .intro {
    margin: 10px 20px 5px 20px;
    height: 250px;
    background-color: #ffffff;
  }

  .intro .one {
    height: 70px;
    margin: 10px 15px 0 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .intro .one img {
    width: 60px;
    height: 60px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .intro .one span {
    margin-right: 25px;
  }

  .intro .two {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
  }

  .intro .two section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  .intro .top,.intro .bottom {
    display: inline-block;
  }

  .intro .three {
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .intro .three button {
    width: 65px;
    height: 31px;
    cursor: pointer;
  }

  .input {
    box-sizing: border-box;
    width: 100%;
    padding: 5px 20px;
  }

  .tree_title {
    margin: 15px 20px -5px 20px;
    height: 34px;
    padding-left: 10px;
    font-size: 18px;
    line-height: 34px;
    background-color: #e1e1e1;
  }

  .el-tree {
    position: relative;
    cursor: default;
    background: #FFF;
    color: #606266;
    margin: 5px 20px;
  }
  /*main部分*/

  .main {
    background-color: #f4f4f3;
  }

  .main .smain {
    margin: -20px 20px 0 0;
    padding: 0 20px;
    background-color: #ffffff;
  }

  .main h1 {
    text-align: center;
    font-size: 22px;
    height: 40px;
    line-height: 40px;
    padding-top: 22px;
  }

  .row {
    background-color: #f3f3f3;;
    height: 100px;
    line-height: 50px;
    padding-left: 15px;
  }

  .row div img {
    width: 25px;
    height: 25px;
  }

  .row span {
    display: inline-block;
    margin-right: 30px;
    font-size: 14px;
  }

  .project_intro {
    height: 700px;
    background-color: #ffffff;
  }

  .project_intro .news {
    margin-top: 15px;
  }

  .operate ul {
    display: flex;
    background-color: #f3f3f3;;
    height: 60px;
    justify-content: center;
    align-items: center;
  }

  .operate ul li {
    margin-left: 30px;
    list-style-type: none;
  }

  .operate ul a {
    text-decoration: none;
    color: black;
  }

  .operate ul a:hover {
    color: #01a1ff;
  }

  .operate img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }



  .tag-group {
    font-size: 14px;
    cursor: pointer;
  }

</style>
