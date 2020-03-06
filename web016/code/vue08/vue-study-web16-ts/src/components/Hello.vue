<template>
  <div>
    <!-- vuex -->
    <h3 @click="add">{{counter}}</h3> 
    <h3 @click="asycAdd">{{counter}}</h3>
    <!-- 属性 -->
    <h3>{{msg}}</h3>
    <!-- 新增特性 -->
    <p>
      <input type="text" @keydown.enter="addFeature" />
    </p>
    <!-- ts特性列表 -->
    <ul>
      <li v-for="feature in features" :key="feature.id">{{feature.name}}</li>
      <li>特性总数：{{count}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import { Feature } from "@/types";
import { getFeatures } from "@/api/feature";
import { Action, State, Mutation } from "vuex-class";

@Component
export default class Hello extends Vue {
  // vuex整合推荐vuex-class
  @State counter!: number;
  // add即是type，类型是函数且无返回值
  @Mutation add!: () => void;
  // add仍是type，但是会和上面重名，需要换个变量名
  // 类型是函数返回值是Promise
  @Action("add") asycAdd!: () => Promise<number>;

  // 属性就是data
  features: Feature[] = [];

  // 括号中的配置时给Vue的
  // 变量附近的配置时给ts
  @Prop({ type: String, required: true })
  msg!: string;

  // 函数直接作为回调
  // Emit修饰的函数就是自定义事件
  // 如果有返回值，则作为事件参数
  // 等同于 this.$emit('add-feature', feature)
  @Emit()
  addFeature(e: KeyboardEvent) {
    // target类型EventTarget
    const inp = e.target as HTMLInputElement;
    const feature = { id: this.features.length + 1, name: inp.value };
    this.features.push(feature);
    inp.value = "";
    return feature;
  }

  // watch
  // @Watch("msg")
  // onMsgChange(val: string, oldVal: string) {
  //   //...
  // }

  // 如果和生命周期钩子同名，就是生命周期
  created() {
    // getFeatures().then(res => {
    //   this.features = res.data
    // })

    this.$axios.get<Feature[]>("/api/list");
    // [{ id: 1, name: "类型注解" }];
  }

  // 存取器用于计算属性
  get count() {
    return this.features.length;
  }
}
</script>

<style scoped>
</style>