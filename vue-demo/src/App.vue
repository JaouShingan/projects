<template>
  <div id="app">
    <Layout>
      <DHeader></DHeader>
      <Layout class="body">
        <Sider hide-trigger>Sider</Sider>
        <Content>
          <keep-alive>
            <router-view />
          </keep-alive>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import DHeader from './components/DHeader';
export default {
	components: {
		DHeader
	},
	data() {
		return {};
	}
};
</script>
<style lang="less">
.body {
  height: calc(100vh - 50px);
}
</style>
